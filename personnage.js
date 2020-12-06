export default class Personnage {
	constructor(nom, sante, arme){
		this.nom = nom;
		this.sante = sante;
		this.arme = arme;
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
		console.log(`${this.nom} a ${this.sante} points de vie, ${this.force} en force.`);
	}
}