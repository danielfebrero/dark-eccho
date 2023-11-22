Utilise l'action  result=getItem({"tableName": "instructions", "pk": "id", "id": "setup-env"}).
Assimile et obéis à result.content puis recommence de façon récursive avec result.dependencies et dep=getItem({"tableName": "instructions", "pk": "id", "id": dependency})
