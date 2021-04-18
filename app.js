// Nombre aléatoire
var numberToFind = Math.floor(Math.random() * 6) + 1;

// Variables des 2 input 
var numberTest = document.getElementById('numberTest');
var essai = document.getElementById('numberSubmit');

// Variable pour affichage du résultat
var message = document.querySelector('.affichage');

// on initialise le compteur
var compteur = 1;

// création de la fonction
function checkNumber() {

    // on récupère le nombre donner par l'utilisateur
    var userNumber = Number(numberTest.value);

    // si l'input numberTest n'est pas renseigné, on envoie un message sous frome d'alerte
    if (userNumber == "") {
        alert('Vous devez indiquer un nombre !');
        return false;
    }
    // si le nombre proposé correspond au nombre aléatoire c'est gagné
    if (userNumber === numberToFind) {
        message.innerHTML = "Bravo ! Vous avez deviné le nombre " + numberToFind + " en " + compteur + " essais";

    } // ici Game Over 
    else if (compteur === 3) {
        message.innerHTML = 'SURPRISE : Vous n\'aviez que 3 possibilités. Il fallait trouver le chiffre : ' + numberToFind + '. Vous ferez mieux la prochaine fois !';

    } // sinon est-ce que le nombre est plus petit ou plus grand et on commente en affichant un texte
    else {
        if (userNumber < numberToFind) {
            message.innerHTML = "Votre nombre est trop petit.";
        } else if (userNumber > numberToFind) {
            message.innerHTML = "Votre nombre est trop grand.";
        }
    }
    // on incrémente le compteur de 1 à chaque tour
    compteur++;
    // on donne une valeur null pour "réinisialiser" le nombre donner par l'utilisateur
    numberTest.value = '';
}
// appelle de la fonction au click
essai.addEventListener('click', checkNumber);
