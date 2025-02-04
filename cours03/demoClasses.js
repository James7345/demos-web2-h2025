/*
Auteur  : Maxime Faucher
Date    : 29 janvier 2025
Sujet   : Démos sur les classes JavaScript

Références utiles
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
    https://www.programiz.com/javascript/classes

*/

// Reprenons notre modèle de personne pour en faire une classe.
class Personne {
    constructor(nom="inconnu", age=0) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}

// Créer un objet de la classe
const personne1 = new Personne("Maxime", 44);

// Appeler la méthode afficherDetails()
personne1.afficherDetails();

// Modifier et afficher le nom avec la notation .
personne1.nom = "Max";
personne1.afficherDetails();

// Modifier l'âge et l'afficher avec la notation []
personne1['age'] = 45;
personne1.afficherDetails();

