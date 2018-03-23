var sayings = [ "You miss 100 percent of the shots you never take",
               "You must be the change you wish to see in the world",
               "We are what we repeatedly do; excellence, then, is not an act but a habit",
              "A wise man gets more use from his enemies than a fool from his friends",
              "Even if you’re on the right track, you’ll get run over if you just sit there",
               "Always forgive your enemies; nothing annoys them so much",
               "Believe those who are seeking the truth. Doubt those who find it",
               "I’d rather live with a good question than a bad answer",
               "A clever person solves a problem. A wise person avoids it",
               "An eye for eye only ends up making the whole world blind"
              ];
var author = ["Wayne Gretzky",
              "M.K.Gandhi",
             "Aristotle",
              "Baltasar Gracian",
              "Will Rogers",
              "Oscar Wilde",
              "André Gide",
              "Aryeh Frimer",
              "Albert Einstein",
              "M.K.Gandhi"
             ];

function getquote(){
  document.getElementById("nq").innerHTML = "New Quote";
  document.getElementById("q").innerHTML = "";
  document.getElementById("b").innerHTML = "";
  var x = Math.floor(Math.random()*10) ;
  
  var one = document.getElementById("q");
  var two = document.getElementById("b");


  for(var i=0;i<sayings[x].length;i++){
    c1 = Math.floor(Math.random() * 256);
    c2 = Math.floor(Math.random() * 256);
    c3 = Math.floor(Math.random() * 256);
    one.style.color= "rgb(" + c1 + "," + c2 + "," + c3 + ")";
    document.getElementById("q").innerHTML += sayings[x][i];
  }

  for(var i=0;i<author[x].length;i++){
    c1 = Math.floor(Math.random() * 256);
    c2 = Math.floor(Math.random() * 256);
    c3 = Math.floor(Math.random() * 256);
    two.style.color= "rgb(" + c1 + "," + c2 + "," + c3 + ")";
    document.getElementById("b").innerHTML += author[x][i];
   }

}