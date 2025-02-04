class tabProduits {
    constructor() {
        this.nom = nom;
        this.prix = prix;
    }

    afficherDetails() {
        console.log(` ${this.nom}, ${this.prix} $.`);
    }
}
const Produit1 = new Produit("Ordinateur", 1200);
const Produit2 = new Produit("Clavier", 100);
const Produit3 = new Produit("Moniteur", 400);
const Produit4 = new Produit("Souris", 50);

console.log(tabProduits);