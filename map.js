export default class Map {
	constructor(elements){
		this.createAndInitMap();
		this.addElementsTnsideMap(elements);
	}


	createAndInitMap(){
		this.mapTab = new Array(10);
		
		for (let i = 0; i < 10; i++) {
			this.mapTab[i] = new Array(10);
			for (let j = 0; j < 10; j++) {
				this.mapTab[i][j] = 0;
			}
		}
	}
	addElementsTnsideMap(elements){
		//remplacer les 0 de mapTab par des objets contenu dans elements aléatoirement.
	}
	afficherMapTab(){
	//faire des console.log pour afficher mapTab(prendre exemple sur la methode createAndInitMap.)

	}
}

		function getRandomInt(max) {
  			return Math.floor(Math.random() * Math.floor(max));
		}
		
