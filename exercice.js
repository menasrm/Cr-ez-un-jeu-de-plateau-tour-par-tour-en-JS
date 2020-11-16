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


class Personnage {
	constructor(nom, sante, force,){
		this.nom = nom;
		this.sante = sante;
		this.force = force;
	}

	attaquer(cible) {
		if (this.sante > 0) {
			const degats = this.force;
			console.log(`${this.nom} attaque ${cible.nom} et lui inflige ${degats} points de dégats`);
			cible.sante-=degats;

			if (cible.sante > 0) {
				console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
			}
			else{  
				cible.sante = 0;
				console.log(`${this.nom} a tué ${cible.nom}`);
			}
		}
		else{
			console.log(`${this.nom} n\'a plus de points de vie et ne peut plus attaquer.`);
		}
	}

	decrire() {
		return (`${this.nom} a ${this.sante} points de vie, ${this.force} en force.`);
	}
}

const Naruto = new Personnage("Naruto", 100, 25);
const Sasuke = new Personnage("Sasuke", 100, 25);

console.log("Bienvenue dans ce jeu de combat ! Voici nos 2 super guerrier :");
console.log(Naruto.decrire());
console.log(Sasuke.decrire());
console.log('test');
console.log(Naruto.attaquer(Sasuke));
console.log('test');


class Armes {
	constructor(nom, force){
		this.nom = nom;
		this.force = force;
	}
}

const Arme_par_defaut = new Armes("Arme par defaut", 10);
const Sabre = new Armes("Sabre", 20);
const Shuriken = new Armes("Shuriken", 15);
const Rasengan = new Armes("Rasengan", 35);
const Kunai = new Armes("Kunai, 25");


let tableauDouble = new Array(10)

for (i = 0; i < 10; i++) {
	tableauDouble[i] = new Array(10)
}

tableauDouble[0][0] = "Naruto"

console.log(tableauDouble[0][0]);