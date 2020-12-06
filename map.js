export default class Map {
	constructor(items){
		this.mapTab = new Array(10);
		this.createAndInitMap();
		this.addElementsTnsideMap(items);
	}


	createAndInitMap(elements){
		for (let i = 0; i < 10; i++) {
			this.mapTab[i] = new Array(10);
			for (let j = 0; j < 10; j++) {
				this.mapTab[i][j] = 0;
			}
		}
	}
	
	addElementsTnsideMap(items){
		for (let k = 0; k < 6; k++) {
			let i = getRandomInt(9);
			let j = getRandomInt(9);
			while (this.mapTab[i][j] != 0) {
				i = getRandomInt(9);
				j = getRandomInt(9);
			}
			this.mapTab[i][j] = items[k];
		}
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
		
