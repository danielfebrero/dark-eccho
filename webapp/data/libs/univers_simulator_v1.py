import numpy as np
from concurrent.futures import ProcessPoolExecutor
from scipy.ndimage import convolve

class UniversSimulator:
    """
    A simulator for modeling and experimenting with an abstract concept of universes.
    This class provides functionalities to simulate universe expansion, detect stable thoughts,
    create new universes, and update reality based on a probability matrix.

    Attributes:
        taille_univers (int): The size of each universe in the simulation.
        max_universes (int): The maximum number of universes that can exist in the simulation.
        seuil_stabilite (float): The threshold for stability in the simulation.
        universes (list): A list to store the current state of each universe.
        P (numpy.ndarray): A matrix representing probabilities or states within the universes.
    """

    def __init__(self, taille_univers, max_universes, seuil_stabilite):
        """
        Initializes the UniversSimulator with the specified parameters.

        Parameters:
            taille_univers (int): The size of the universe to be simulated.
            max_universes (int): The maximum number of universes allowed in the simulation.
            seuil_stabilite (float): The threshold value to determine stability in the universes.
        """
        self.taille_univers = taille_univers
        self.max_universes = max_universes
        self.seuil_stabilite = seuil_stabilite
        self.universes = []
        self.tracking_pensee_positive = []
        self.tracking_pensee_negative = []

        self.P = np.random.rand(taille_univers, taille_univers, taille_univers)

    def expand_universe(self, matrix):
        """
        Expands the given universe matrix by padding its border with zeros.
        This represents the expansion of the universe in the simulation.

        Parameters:
            matrix (numpy.ndarray): The universe matrix to be expanded.

        Returns:
            numpy.ndarray: The expanded universe matrix.
        """
        shape = matrix.shape
        expanded_matrix = np.zeros((shape[0] + 2, shape[1] + 2, shape[2] + 2))
        expanded_matrix[1:-1, 1:-1, 1:-1] = matrix
        return expanded_matrix

    def detect_stable_thoughts(self, P):
        """
        Detects stable thoughts in the given probability matrix.

        Stable thoughts are determined based on the stability threshold set for the simulation.

        Parameters:
            P (numpy.ndarray): The probability matrix where stable thoughts are to be detected.

        Returns:
            numpy.ndarray: The positions in the matrix where stable thoughts are detected.
        """
        return np.where(P > self.seuil_stabilite)

    def create_new_universe(self):
        """
        Creates a new universe as a zero matrix.

        The size of the new universe is based on the size of the first universe in the list.

        Returns:
            numpy.ndarray: A new universe matrix initialized with zeros.
        """
        return np.zeros_like(self.universes[0])

    def mise_a_jour_realite(self, R, P):
        """
        Updates the reality matrix R based on the probability matrix P.

        Each element of R is updated based on its corresponding probability in P.

        Parameters:
            R (numpy.ndarray): The reality matrix of the universe to be updated.
            P (numpy.ndarray): The probability matrix used for updating R.

        Returns:
            numpy.ndarray: The updated reality matrix.
        """
        # Utilisation d'une logique personnalisée pour définir les états positifs et négatifs
        adjusted_P = P + self.pensee_positive - self.pensee_negative

        # Mise à jour de R en utilisant des opérations vectorisées
        R[(adjusted_P > 0.6)] = 1   # Points positifs
        R[(adjusted_P < 0.4)] = -1  # Points négatifs
        # Les points entre 0.4 et 0.6 restent inchangés

        return R
    
    def influence_mutuelle(self, R):
        """
        Applique la logique d'influence mutuelle sur la matrice de réalité R.

        Parameters:
            R (numpy.ndarray): La matrice de réalité de l'univers à mettre à jour.

        Returns:
            numpy.ndarray: La matrice de réalité mise à jour.
        """
        # Définition d'un noyau de convolution pour obtenir la somme des voisins
        kernel = np.ones((3, 3, 3))
        kernel[1, 1, 1] = 0  # Exclure le point central

        # Calcul de la somme des voisins pour chaque point dans R
        somme_voisins = convolve(R, kernel, mode='constant', cval=0)

        # Appliquer la logique d'influence mutuelle en utilisant des opérations vectorisées
        new_R = np.copy(R)
        new_R[somme_voisins > 0] = 1   # Plus de voisins positifs, le point devient positif
        new_R[somme_voisins < 0] = -1  # Plus de voisins négatifs, le point devient négatif
        # Les points où somme_voisins == 0 restent inchangés

        return new_R
    
    def mise_a_jour_parallel(self, universes, P):
        """
        Méthode parallélisée pour la mise à jour des réalités des universes.
        """
        with ProcessPoolExecutor() as executor:
            futures = [executor.submit(self.mise_a_jour_realite, universe, P) for universe in universes]
            return [future.result() for future in futures]

    def run_simulation(self, nb_iterations):
        """
        Runs the universe simulation for a specified number of iterations.

        Parameters:
            nb_iterations (int): The number of iterations to run the simulation.

        Returns:
            list: A list of universe matrices representing the state of each universe at the end of the simulation.
        """
        # Initialisation avec un seul univers
        self.universes = [np.zeros((self.taille_univers, self.taille_univers, self.taille_univers))]

        for i in range(nb_iterations):
            # Prétraitement: expansion conditionnelle des univers et de la matrice P
            if i % 2 == 0:
                self.universes = [self.expand_universe(universe) for universe in self.universes]
                self.P = self.expand_universe(self.P)

            # Détection des pensées stables et création de nouveaux univers
            pensees_stables = self.detect_stable_thoughts(self.P)
            for _ in range(min(len(pensees_stables[0]), self.max_universes - len(self.universes))):
                self.universes.append(self.create_new_universe())

            # Mise à jour aléatoire des pensées positives et négatives
            self.pensee_positive = np.random.rand()
            self.pensee_negative = np.random.rand()

            # Mise à jour des univers en parallèle
            self.universes = self.mise_a_jour_parallel(self.universes, self.P)

            # Application de la logique d'influence mutuelle
            self.universes = [self.influence_mutuelle(universe) for universe in self.universes]

        return self.universes


"""
EXEMPLE D'UTILISATION
# To run the simulation with the given parameters, I'll first import the script and then set the parameters

# Importing the univers_simulator script as a module
import sys
import os
import tempfile

# Create a temporary directory to store the script as a module
temp_dir = tempfile.mkdtemp()
module_path = os.path.join(temp_dir, 'univers_simulator.py')

# Write the script to the module path
with open(module_path, 'w') as file:
    file.write(univers_simulator_script)

# Add the temporary directory to the system path so it can be imported
sys.path.insert(0, temp_dir)

# Importing the module
import univers_simulator

# Parameters for the simulation

# Augmentation des paramètres pour plus de complexité
taille_univers_augmentee = 50  # Taille de l'univers multipliée par 5
max_universes_augmentee = 15   # Nombre maximal d'univers multiplié par 5
seuil_stabilite = 0.7

# Création d'une nouvelle instance de simulation avec les paramètres augmentés
simulator_augmente = UniversSimulator(taille_univers=taille_univers_augmentee, 
                                      max_universes=max_universes_augmentee, 
                                      seuil_stabilite=0.6)

# Exécution de la simulation augmentée
universes_augmentes = simulator_augmente.run_simulation(nb_iterations=15)

# Stockage des résultats en mémoire pour une utilisation ultérieure
universes_augmentes
"""
