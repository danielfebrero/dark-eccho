var createError = require('http-errors');
const express = require("express");
const { DynamoDBClient, QueryCommand, GetItemCommand, UpdateItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb"); // ES6 import
const { v4 } = require('uuid');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const ddbClient = new DynamoDBClient({ region: "us-west-2" });
const ddb = DynamoDBDocumentClient.from(ddbClient);

const processDynamoDbDataThroughExpress = (res, response, successCode) => {
  if (!response?.Item && !response?.Items) {
    let returnStatus = 500;

    if (response?.err === "ConditionalCheckFailedException") {
      returnStatus = 409;
    }

    res.status(returnStatus).end();
    console.log("DDB Error: " + response?.err);
  } else {
    res.status(successCode).json({ data: response }).end();
  }
};

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/**
 * Edit item in DynamoDB table or inserts new if not existing
 * @param {string} tableName // Name of the target table
 * @param {string} pk // partition key of the item ( necessary for new inserts but not modifiable by the update/edit)
 * @param {object} item // Object containing all the props for new item or updates for already existing item
**/
const update = async (tableName, item, pk = "gpt_id") => {
  const itemKeys = Object.keys(item).filter(k => k !== pk);
      const params = {
          TableName: tableName,
          UpdateExpression: `SET ${itemKeys.map((k, index) => `#field${index} = :value${index}`).join(', ')}`,
          ExpressionAttributeNames: itemKeys.reduce((accumulator, k, index) => ({
              ...accumulator,
              [`#field${index}`]: k
          }), {}),
          ExpressionAttributeValues: itemKeys.reduce((accumulator, k, index) => ({
              ...accumulator,
              [`:value${index}`]: item[k]
          }), {}),
          Key: {
              [pk]: item[pk]
          },
          ReturnValues: 'ALL_NEW'
      };
  return await ddb.send(new UpdateItemCommand(params))
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// MEMORY
app.get("/query", async (req, res) => {
  const { key, tableName } = req.query;

  const buff = new Buffer(key, "base64");
  const text = buff.toString("ascii");
  
  const command = new QueryCommand({
    TableName: tableName,
    Key: JSON.parse(text),
  });

  console.log(command)

  
  let response;
  try {
    response = await ddb.send(command);
    console.log({response})
    processDynamoDbDataThroughExpress(res, response, 200)
  } catch (error) {
    res.status(500).send(`Erreur serveur: ${error.message}`);
  }
});

app.post("/scan", async (req, res) => {
  try {
    const { tableName, input } = req.body;

    const command = new ScanCommand({...input, TableName: tableName});

    response = await ddb.send(command);

    processDynamoDbDataThroughExpress(res, response, 200)    
  } catch(error) {
    res.status(500).send(`Erreur serveur: ${error.message}`);
  }
})

app.get("/item", async (req, res) => {
  let response;
  try {
    const { id, tableName, pk } = req.query;
    const command = new GetItemCommand({
      TableName: tableName,
      Key: {
        [pk]: { S: id },
      },
    });
  
    response = await ddb.send(command);
    processDynamoDbDataThroughExpress(res, response, 200)    
  } catch (error) {
    res.status(500).send(`Erreur serveur: ${error.message}`);
  }
});

app.post("/item", async (req, res) => {
  let response;
  try {
    const { item, tableName, pk } = req.body;
    
    response = await update(tableName, item, pk);

    res.status(201).json({data: {...response, item}})
    console.log({response})
  } catch (error) {
    res.status(500).send(`Erreur serveur: ${error.message}`);
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
