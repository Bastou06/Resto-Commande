// Création CONSTANTES / VARIABLES

const prixPlat = 20;
const prixBA = 8;
const prixBNA = 5;

const BNA = "1";
const BA = "2";
const PLAT = "3";
const SORTIR = "4";
const NEANT = "";

let age = prompt("Quel âge avez-vous?")
let credit = prompt("Quel solde voulez-vous créditer?")
let choix;


//FONCTION VERIF CREDIT

function VerifierCredit(credit) {

    if (credit >= 20) {
        alert(
            `Vous disposez de ${credit} euros.
    -----------------------------------
        Vous pouvez encore commander:
    
        Boisson non Alcoolisée(5 euros)

        Boisson Alcoolisée(Majeur uniquement, 8 euros)

        Plat(20 euros)
    
    ------------------------------------
    `)
    }

    else if (credit < 20 && credit >= 8) {
        alert(
            `Vous disposez de ${credit} euros.
    -----------------------------------
        Vous pouvez encore commander: 

        Boisson non Alcoolisée (5 euros), 

        Boisson Alcoolisée (Majeur uniquement, 8 euros)
    -----------------------------------
    
    `)
    }

    else if (credit < 8 && credit >= 5) {
        alert(
            `Vous disposez de ${credit} euros.
    ------------------------------------------------------------------
        Vous pouvez encore commander: Boisson non Alcoolisée(5 euros)
    ------------------------------------------------------------------
    
    `)
    }

    else {
        alert(
            "Vous ne disposez pas d'un solde suffisant pour pouvoir commander, veuillez recharger"
        )
    }

}

// Demande du choix au client


while    (credit >= 5 && choix != 4) {

    choix = prompt(
        `Vous disposez de ${credit} euros.
    -----------------------------------
        Que voulez vous choisir ?
    -----------------------------------
        1 / Boisson non Alcoolisée(5 euros)
        2 / Boisson Alcoolisée(Majeur uniquement, 8 euros)
        3 / Plat(20 euros)
        4 / Sortir
    ------------------------------------
    `)



    // COMMANDE BOISSON NON ALCOOLISEE


    if (choix == "1") {

        if (credit >= prixBNA) {

            (credit = credit - prixBNA); {

                alert("commande acceptée ! Votre solde est de " + credit + " euros ");
            }
        }


        else {

            alert("solde insuffisant");

        }
    }


    //COMMANDE BOISSON ALCOOLISEE


    else if (choix == "2") {

        if (age < 18) {

            alert("Vous n'êtes pas majeur, vous ne pouvez pas commander d'alcool")

        }

        else if (credit < prixBA) {

            alert("solde insuffisant");

        }

        else {

            (credit = credit - prixBA);

            alert("Commande validée ! Il vous reste" + credit + "euros")

        }

    }


    //COMMANDE PLAT


    else if (choix == "3") {

        if (credit >= prixPlat) {

            (credit = credit - prixPlat); {

                alert("commande acceptée ! Votre solde est de " + credit + " euros ");
            }
        }


        else {

            alert("solde insuffisant");

        }
    }


    // SORTIE

    else if (choix == "4") {

        alert("Merci de votre visite et à bientôt !")

    }

    else {
        alert("Je n'ai pas compris veuillez réessayer");
    }

    VerifierCredit(credit);

}

