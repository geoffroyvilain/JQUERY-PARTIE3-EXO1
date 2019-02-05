//Construisez une page html avec un bouton et un champ texte dans lequel on affiche le nombre de clics sur le bouton.
$(function() {
//nombre de coups
  var count = 0; // à mettre en dehors de la fonction sinon réinitialisé à 0 à chaque clic
  $('#clickMe').click(function() {
    count++; //AJOUTE 1 AU COMPTEUR
// '#text' permet d'écrire du texte / val permet de definir la valeur
    $('#text').val(count);
  });
});
