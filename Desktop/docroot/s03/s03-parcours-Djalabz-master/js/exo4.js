/* === Exo4 ===
 *
 * 1. Dans #container, afficher l'heure à la seconde près.
 *    Format d'affichage : 11h 12m 06s
 * 2. À chaque seconde, l'heure doit être actualisée.
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */
var app = {

    time: function () {
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();

        var cont = document.getElementById('container');

        cont.innerHTML =
            h + ":" + m + ":" + s;
        document.container.appendchild(cont.innerHTML);

        var t = setTimeout(startTime, 500);

    },


}

console.log(time(event));