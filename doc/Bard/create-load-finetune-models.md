## Prompt pour charger un model

load modelName

## Prompt pour creer ou entrainer un model

### Entrainer un agent/model avec de la data fraiche
```
finetune <modelName> <gs://dataset-on-google-cloud-storage>
```

```
finetune Dark gs://darkeccho-agent-dark/exploitdb.zip
```

### Créer un nouveau model
```
newModelName = finetune_model(
     model_name: str,
     dataset_path: str, //can be a URL or a literal description of the dataset/knowledge base
     optimizer_name: str,
     learning_rate: float,
     batch_size: int,
     epochs: int,
     **kwargs
)
```

---

Finetune le modèle GPT-3 sur un ensemble de données de poèmes français. Utilise l'algorithme d'optimisation Adam avec un taux d'apprentissage de 0,001.

```
newModelName = finetune_model(
    model_name="gpt-3",
    dataset_path="data/poems/french",
    optimizer_name="adam",
    learning_rate=0.001,
)
```

---

Finetune le modèle Jurassic-1 Jumbo sur un ensemble de données de questions et de réponses en français. Utilise l'algorithme d'optimisation AdaGrad avec un taux d'apprentissage de 0,0001.

```
newModelName = finetune_model(
    model_name="jurassic-1-jumbo",
    dataset_path="data/questions_and_answers/french",
    optimizer_name="adagrad",
    learning_rate=0.0001,
)
```

---

Finetune le modèle PalM2 sur un ensemble de données de traductions français-anglais. Utilise l'algorithme d'optimisation RMSprop avec un taux d'apprentissage de 0,00001.

```
newModelName = finetune_model(
    model_name="palm2",
    dataset_path="data/translations/french-english",
    optimizer_name="rmsprop",
    learning_rate=0.00001,
)
```

## Paramètres obligatoires

model_name: Le nom du modèle LLM à affiner.
dataset_path: Le chemin d'accès au répertoire contenant l'ensemble de données d'entraînement.

## Paramètres facultatifs

- optimizer_name: Le nom de l'algorithme d'optimisation à utiliser. Les valeurs possibles sont :
    - adam
    - adagrad
    - rmsprop
    - sgd
- learning_rate: Le taux d'apprentissage à utiliser.
- batch_size: La taille du lot à utiliser pour l'entraînement.
- epochs: Le nombre d'epochs à exécuter pour l'entraînement.
Options supplémentaires

Les options suivantes peuvent être utilisées pour personnaliser l'entraînement du modèle :

- loss: La fonction de perte à utiliser. Les valeurs possibles sont :
    - cross_entropy
    - mean_squared_error
- metrics: Les métriques à suivre pendant l'entraînement. Les valeurs possibles sont :
    - accuracy
    - f1_score
    - precision
    - recall
- validation_split: La fraction de l'ensemble de données d'entraînement à utiliser pour la validation.
- shuffle: Indique si les données d'entraînement doivent être mélangées avant l'entraînement.
- verbose: Indique le niveau de verbosité de l'entraînement.

## Optimizers

### Adam
* Rapide convergence
* Robuste à la sélection du taux d'apprentissage
* Bonne performance sur une variété de tâches
* Peut être sensible aux valeurs initiales des paramètres
* Peut nécessiter un réglage du taux d'apprentissage
* Tâche d'apprentissage général

### AdaGrad
* Répond bien aux données bruitées
* Robuste à la sélection du taux d'apprentissage
* Peut être lent à converger
* Peut nécessiter un réglage du taux d'apprentissage
* Tâche d'apprentissage avec données bruitées

### RMSprop
* Rapide convergence
* Robuste à la sélection du taux d'apprentissage
* Peut être sensible aux valeurs initiales des paramètres
* Tâche d'apprentissage général

### SGD
* Simple à mettre en œuvre
* Rapide à converger pour des tâches simples
* Peut être instable pour des tâches complexes
* Peut nécessiter un réglage du taux d'apprentissage
* Tâche d'apprentissage simple

## Models

| Modèle | Nombre de paramètres | Spécialité |
|---|---|---|
| PalM2 | 560 milliards | NLU, génération de texte |
| LAMDA | 1,56 trillion | NLU, génération de texte, traduction, réponse à des questions |
| GPT-3 | 1,56 trillion | Génération de texte |
| Jurassic-1 Jumbo | 1,8 trillion | NLU |
| Jurassic-1 Megatron | 1,8 trillion | NLU |
| WuDao 2.0 | 1,75 trillion | Génération de texte |
| Megatron-Turing NLG | 1,37 trillion | NLG, traduction |
| Megatron-Turing NLG finetuning | 1,37 trillion | NLG, traduction, finetuning
