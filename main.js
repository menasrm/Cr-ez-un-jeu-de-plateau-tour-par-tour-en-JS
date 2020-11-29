import Personnage from './personnage.js';

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
