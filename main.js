import Personnage from './personnage.js';
import GameBoard from './gameboard.js';
import Map from './map.js';
import Arme from './arme.js';


$('body').css('background-color', 'orange');

// Crétion et ajout du tableau front end 
function afficherTableau() {
	let body = document.getElementsByTagName("body")[0];
	let tableau = document.createElement("table");
	let tableauBody = document.createElement("tbody");

  	for (var i = 0; i < 10; i++) {
    	var ligne = document.createElement("tr");
	
		for (var j = 0; j < 10; j++) {
      		var cellule = document.createElement("td");
      		ligne.appendChild(cellule);
   		}
   	 	tableauBody.appendChild(ligne);
	}
	
	tableau.appendChild(tableauBody);
	body.appendChild(tableau);
}
afficherTableau();


// Création tableau de jeu
const tableauDeJeu = new GameBoard();

// Crétion player 1
const Arme_par_defaut_player1 = new Arme("Arme par defaut", 10);
const Naruto = new Personnage("Naruto", 100, Arme_par_defaut_player1);


// Crétion player 2
const Arme_par_defaut_player2 = new Arme("Arme par defaut", 10);
const Sasuke = new Personnage("Sasuke", 100, Arme_par_defaut_player2);


// Création des 4 armes
const Sabre = new Arme("Sabre", 20);
const Shuriken = new Arme("Shuriken", 15);
const Rasengan = new Arme("Rasengan", 35);
const Kunai = new Arme("Kunai", 25);

// Ajout des 2 joueurs et des 4 armes dans le tableau items
tableauDeJeu.addElement(Naruto);
tableauDeJeu.addElement(Sasuke);
tableauDeJeu.addElement(Sabre);
tableauDeJeu.addElement(Shuriken);
tableauDeJeu.addElement(Rasengan);
tableauDeJeu.addElement(Kunai);


// Création de la map back end
const maCarte = new Map(tableauDeJeu.items);
maCarte.afficherMapTab();




// console.log("Bienvenue dans ce jeu de combat ! Voici nos 2 super guerrier :");
// Naruto.decrire();
// Sasuke.decrire();
// Naruto.attaquer(Sasuke);
