/* === Exo8 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la chaîne de caractères la plus longue de l'Array.
 *
 * Par exemple :
 * - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 * - ['css', 'html', 'js', 'php'] : 'html'
 * - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 * - [] : false
 */


cou = ['coucou', 'hello', 'bonjour'];


function getLongestString(arr) {

    var length = 0;
    var longest = "";
    for (var i = 0; i < arr.length; i++) {


        if (arr[i].length > length) {
            length = arr[i].length;
            longest = arr[i];
        }
    }
    return "String : " + longest + " Length : " + length;

}

console.log(getLongestString('cou'))



// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);