export default class GameBoard{
	constructor(){
		this.mapItems = new Array();
	}

	// Création du tableau front end, ajout des abstacles et ajout du tableau dans le Front
	initFrontMap(mapTab) {
		// Initialiser le tableau Front
		let body = document.getElementsByClassName("frontMapContainer")[0];
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

	initPlayerInfos(players) {
		for (let i = 0; i < players.length; i++) {
  			let playerElement = document.getElementsByClassName("playerContainer")[i];

			let nameH3 = playerElement.getElementsByClassName("playerName")[0];
  			nameH3.textContent = players[i].nom;
  			playerElement.replaceChild(nameH3, playerElement.getElementsByClassName("playerName")[0]);

			let imageDiv = playerElement.getElementsByClassName("playerImage")[0];
  			imageDiv.classList.add(players[i].cssClass);
  			playerElement.replaceChild(imageDiv, playerElement.getElementsByClassName("playerImage")[0]);


  			this.updatePlayerInfos(players[i]);
		}
	}

	updatePlayerInfos(player) {
		let playerElement = document.getElementsByClassName("playerContainer")[player.id - 1];  			

		let hpP = playerElement.getElementsByClassName("playerHp")[0].getElementsByTagName("p")[0];
  		let hpSpan = document.createElement("span");
  		hpSpan.textContent = player.sante;
  		hpP.appendChild(hpSpan);

		let coordinatesP = playerElement.getElementsByClassName("playerCoordinates")[0].getElementsByTagName("p")[0];
		let coordinatesSpan = document.createElement("span");
		coordinatesSpan.textContent = player.horizontalAxis + ", " + player.verticalAxis;
		coordinatesP.appendChild(coordinatesSpan);

		let armeNameH3 = playerElement.getElementsByClassName("playerArmeName")[0];
  		armeNameH3.textContent = player.arme.nom;
  		playerElement.replaceChild(armeNameH3, playerElement.getElementsByClassName("playerArmeName")[0]);

		let armeForceP = playerElement.getElementsByClassName("playerArmeForce")[0].getElementsByTagName("p")[0];
		let armeForceSpan = document.createElement("span");
		armeForceSpan.textContent = player.arme.force;
		armeForceP.appendChild(armeForceSpan);


		let imageArmeDiv = document.createElement("div");
  		imageArmeDiv.classList.add("playerArmeImage", player.arme.cssClass);
		playerElement.replaceChild(imageArmeDiv, playerElement.getElementsByClassName("playerArmeImage")[0]);
	}
}


//creer tableau elements qui contient les éléments personnage et armes.
//creer une methode pour ajouter un élément dans le tableau elements,
