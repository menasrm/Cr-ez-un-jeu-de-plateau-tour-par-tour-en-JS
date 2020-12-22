import Personnage from './personnage.js';
import GameBoard from './gameboard.js';
import Map from './map.js';
import Arme from './arme.js';



// Création tableau de jeu
const tableauDeJeu = new GameBoard();


// Crétion player 1
const Arme_par_defaut_player1 = new Arme("Arme par defaut", 10, 1);
const Naruto = new Personnage("Naruto", 100, Arme_par_defaut_player1, 1);


// Crétion player 2
const Arme_par_defaut_player2 = new Arme("Arme par defaut", 10, 2);
const Sasuke = new Personnage("Sasuke", 100, Arme_par_defaut_player2, 2);


// Création des 4 armes
const Sabre = new Arme("Sabre", 20, 3);
const Shuriken = new Arme("Shuriken", 15, 4);
const Rasengan = new Arme("Rasengan", 35, 5);
const Kunai = new Arme("Kunai", 25, 6);


// Ajout des 2 joueurs et des 4 armes dans le tableau items
tableauDeJeu.addElement(Naruto);
tableauDeJeu.addElement(Sasuke);
tableauDeJeu.addElement(Sabre);
tableauDeJeu.addElement(Shuriken);
tableauDeJeu.addElement(Rasengan);
tableauDeJeu.addElement(Kunai);


// Création de la map back end
const maCarte = new Map(tableauDeJeu.mapItems, 10); // arg2 = nombre de cailloux


// Initialisation de la map FrontEnd
tableauDeJeu.initFrontMap(maCarte.mapTab);
tableauDeJeu.initPlayerInfos([Naruto, Sasuke]);






















// console.log("Bienvenue dans ce jeu de combat ! Voici nos 2 super guerrier :");
// Naruto.decrire();
// Sasuke.decrire();
// Naruto.attaquer(Sasuke);
