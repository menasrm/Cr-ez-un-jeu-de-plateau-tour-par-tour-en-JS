export default class GameBoard{
	constructor(){
		this.mapItems = new Array();
	}

	// Création du tableau front end, ajout des abstacles et ajout du tableau dans le Front
	initFrontMap(mapTab) {
		// Initialiser le tableau Front
		let body = document.getElementsByTagName("body")[0];
		let tableau = document.createElement("table");
		let tableauBody = document.createElement("tbody");
		tableauBody.id = "FontMap";

		for (let i = 0; i < 10; i++) {
			let ligne = document.createElement("tr");

			for (let j = 0; j < 10; j++) {
				let cellule = document.createElement("td");

				// Ajout des abstacles
				if (mapTab[j][i] == 1)
					cellule.classList.add("inaccessibleBoxes"); 

				//Ajout des items
				for (let c = 0; c < this.mapItems.length; c++) { 
					if (j == this.mapItems[c].horizontalAxis && i == this.mapItems[c].verticalAxis)
						cellule.classList.add(this.mapItems[c].cssClass); 
				}

				ligne.appendChild(cellule);
			}
			tableauBody.appendChild(ligne);
		}

		tableau.appendChild(tableauBody);
		// Ajouter le tableau dans le Front
		body.appendChild(tableau);
	}

	addElement(element){
		//tableau elements 
		this.mapItems.push(element);
	}
}


//creer tableau elements qui contient les éléments personnage et armes.
//creer une methode pour ajouter un élément dans le tableau elements,
