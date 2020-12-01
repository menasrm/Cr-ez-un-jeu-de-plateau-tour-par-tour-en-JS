import Personnage from './personnage.js';
import GameBoard from './gameboard.js';
import Map from './map.js';
import Arme from '.arme.js';


$('body').css('background-color', 'orange');


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


const Naruto = new Personnage("Naruto", 100, 25);
tableauDeJeu.addElement(Naruto);
//ajoutez Naruto dans le tableau elements "tableau de gameboard"
const Sasuke = new Personnage("Sasuke", 100, 25);
tableauDeJeu.addElement(Sasuke);
//ajoutez Sasuke dans le tableau elements "tableau de gameboard"

tableauDeJeu.addElement(Arme_par_defaut);
tableauDeJeu.addElement(Sabre);
tableauDeJeu.addElement(Shuriken);
tableauDeJeu.addElement(Rasengan);
tableauDeJeu.addElement(Kunai);


const Arme_par_defaut = new Arme("Arme par defaut", 10);
const Sabre = new Arme("Sabre", 20);
const Shuriken = new Arme("Shuriken", 15);
const Rasengan = new Arme("Rasengan", 35);
const Kunai = new Arme("Kunai", 25);

const maCarte = new Map(tableauDeJeu.elements);
maCarte.afficherMapTab();
const tableauDeJeu = new GameBoard();



Sasuke.Arme()
console.log("Bienvenue dans ce jeu de combat ! Voici nos 2 super guerrier :");
Naruto.decrire();
Sasuke.decrire();
Naruto.attaquer(Sasuke);
