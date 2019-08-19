/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */
var app = {
    init: function (evt) {
        var left = document.getElementById('input1');
        var right = document.getElementById('input2');

        document.button.addEventListener('submit', app.Calculate);
        app.ShowResult();
    },



    calculate: function (evt) {
        var left = document.getElementById('input1');
        var right = document.getElementById('input2');
        return (Number(left) * Number(right));
    },

    ShowResult: function (event) {
        var result = document.getElementById('result');
        return result.appendChild(app.calculate.value);
    },
}

document.addEventListener('DOMContentLoaded', app.init);