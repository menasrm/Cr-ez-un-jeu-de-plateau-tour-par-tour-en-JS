export default class GameBoard{
	constructor(){
		this.items = new Array();
	}

	addElement(element){
		//tableau elements 
		this.items.push(element);
	}
}


//creer tableau elements qui contient les éléments personnage et armes.
//creer une methode pour ajouter un élément dans le tableau elements,
