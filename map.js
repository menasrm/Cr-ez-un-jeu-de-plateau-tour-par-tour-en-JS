export default class Map {
	constructor(items, nbInaccessibleBoxes){
		this.mapTab = new Array(10);
		this.createAndInitMap();
		this.addElementsTnsideMap(items, nbInaccessibleBoxes);
	}


	createAndInitMap(elements){
		for (let i = 0; i < 10; i++) {
			this.mapTab[i] = new Array(10);
			for (let j = 0; j < 10; j++) {
				this.mapTab[i][j] = 0;
			}
		}
	}
	
	addElementsTnsideMap(items, nbInaccessibleBoxes){
		for (let k = 0; k < 6; k++) {
			let i = getRandomInt(9);
			let j = getRandomInt(9);

			while ( (this.mapTab[i][j] != 0) || (this.isThePlayerNear(i, j, items) == 1) ) {
				i = getRandomInt(9);
				j = getRandomInt(9);
			}

			this.mapTab[i][j] = items[k];
		}
		
		for (let l = 0; l < nbInaccessibleBoxes; l++) {
			let i = getRandomInt(9);
			let j = getRandomInt(9);
		
			while (this.mapTab[i][j] != 0) {
				i = getRandomInt(9);
				j = getRandomInt(9);
			}	
			this.mapTab[i][j] = 1;
		} 
	}
	
	isThePlayerNear(i, j, items) {
		//Si un joueur est à côté de la position [i][j], return 1
		//Sinon, return 0

		let aroundBoxesI = [0, 1, 0, -1];
		let aroundBoxesJ = [-1, 0, 1, 0];


		for (let c = 0; c < 4; c++) {
			if (((i + aroundBoxesI[c] >= 0) && (j + aroundBoxesJ[c] >= 0)) && ((i + aroundBoxesI[c] <= 9) && (j + aroundBoxesJ[c] <= 9))) {
				if (Object.getPrototypeOf(this.mapTab[i + aroundBoxesI[c]][j + aroundBoxesJ[c]]) == Object.getPrototypeOf(items[0])) {
					// console.log("Attention, il y a un personnage à côté de cette position");
					// console.log("Position testée => i=" + i + " j=" + j);
					// console.log("Mais il y a déjà un joueur présent en position => i=" + [i + aroundBoxesI[c]] + " j=" + [j + aroundBoxesJ[c]]);
					return (1);
				}
			}
		}
		return (0);
	}








	afficherMapTab(){
		for (let i = 0; i < 10; i++) {
			console.log(this.mapTab[i]);
			for (let j = 0; j < 10; j++) {
				// console.log(this.mapTab[i][j]);
			}
		}
	}

}

function getRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
}
		
