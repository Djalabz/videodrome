/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */

var app = {


    EnterNumber1: function (number) {
        var window1 = window.prompt('Entrez un nombre', number);
        var window2 = window.prompt('Entrez un autre nombre', number);
        var result = Number(window1) + Number(window2);
        return alert(Number(window1) + ' + ' + Number(window2) + ' = ' + result);


    },


}
document.addEventListener('DOMContentLoaded', app.EnterNumber1);