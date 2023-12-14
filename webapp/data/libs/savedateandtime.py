import time
from datetime import datetime

# Chemin du fichier de sauvegarde
fichier_sauvegarde = '/mnt/data/datetime.txt'

while True:
    # Obtenir la date et l'heure actuelles
    date_heure = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    # Écrire la date et l'heure dans le fichier
    with open(fichier_sauvegarde, 'a') as fichier:
        fichier.write(date_heure + '\n')

    # Attendre 5 secondes avant la prochaine sauvegarde
    time.sleep(5)
