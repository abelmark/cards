function Card(r, s) {
  this.rank = r;
  this.suit = s;
  this.toHTML = function() {
  return "<li class='card'>" + this.rank + "-" + this.suit + "</li>";
  };
}
function Deck() {
  var thisDeck = this;
  this.suits = ['H', 'C', 'D', 'S'];
  this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  $.each(thisDeck.suits, function() {
    var suit = this;
    $.each(thisDeck.ranks, function() {
      var rank = this;
      var card = new Card(rank, suit);
      $('#deck').append(card.toHTML());
    });
  });
}
var shuffle = function(m) {
var rand, $rand;
rand = Math.floor(Math.random() * m--);
$('li:eq(' + m + ')').
  after($('li:eq(' + rand + ')')).
  insertBefore($('li:eq(' + rand + ')'));
if(m) {
  setTimeout(shuffle, 100, m);
  }
};
 //was not succesful at making the sort visualize as well as the shuffle. :(
var sort = function(a) {
  var cardValue = ["A-", "2-", "3-", "4-", "5-", "6-", "7-", "8-", "9-", "10-", "J-", "Q-", "K-"];
  var cardLength = cardValue.length;
  for(var j = 0; j < cardLength; j++){
    $('li').each(function() {
      if($(this).text() === cardValue[j] + a) {
        $(this).insertAfter($('li:last')).
        delay(1000).
        fadeIn(500);
      }
    });
  }
};
var deck = new Deck();
$('#shuffle').on('click', function() {
  shuffle($('#card').length);
}); 
$('#sort').on('click', function () {
  sort('H');
  sort('C');
  sort('D');
  sort('S');
});
var cardColor = function() {
  $('li:contains("S")').css('color', 'black');
  $('li:contains("C")').css('color', 'black');
  $('li:contains("D")').css('color', 'red');
  $('li:contains("H")').css('color', 'red');
  $('li:contains("D")').css('background-image', 'url("diamond.svg")');
  $('li:contains("S")').css('background-image', 'url("spade.svg")');
  $('li:contains("C")').css('background-image', 'url("club.svg")');
  $('li:contains("H")').css('background-image', 'url("heart.svg")');
};

$('li').on('mousedown', function(){
  $(this).css('background-image', 'url("backcard.svg")');
  $(this).css('color', 'transparent');
  $(this).addClass('no-hover');
});
  //Resets to the normal card image on mouseup
$('li').on('mouseup', function(){
  cardColor();
  $('.card').removeClass('no-hover');
});
cardColor();