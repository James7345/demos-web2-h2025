class tabProduits {
    constructor() {
        this.nom = nom;
        this.prix = prix;
    }

    afficherDetails() {
        console.log(` ${this.nom}, ${this.prix} $.`);
    }
}
const Produit1 = new tabProduits("Ordinateur", 1200);
const Produit2 = new tabProduits("Clavier", 100);
const Produit3 = new tabProduits("Moniteur", 400);
const Produit4 = new tabProduits("Souris", 50);

const produits = [Produit1, Produit2, Produit3, Produit4];

for(const tabProduits of produits) {
    tabProduits.afficherDetails();
}

console.log(produits);