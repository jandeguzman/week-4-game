
//This is to generate a random number between 19 and 120 and to make it show up on the document
  var number = Math.floor(Math.random()*101+19)
  console.log(number);
  $("#randomNumber").text(number);



//This is to assign a value between 1-12 to each of the 4 hearts 
  var wins= 0;
  var losses = 0;
  var clicktotal = 0;

  var one= Math.floor(Math.random()*11+1)
    $("#one").on("click", function() {
      clicktotal = clicktotal + one;
      console.log(one);
      $("#totalscore").text(clicktotal);
        if (clicktotal == number){
          win();
          $("#result").text("You Won!");
        }
        else if ( clicktotal > number){
          loss();
          $("#result").text("You Lost!");
        }   
});

  var two= Math.floor(Math.random()*11+1)
    $("#two").on("click", function() {
      clicktotal = clicktotal + two;
      console.log(two);
      $("#totalscore").text(clicktotal);
        if (clicktotal == number){
          win();
          $("#result").text("You Won!");
        }
        else if ( clicktotal > number){
          loss();
          $("#result").text("You Lost!");
        }   
});

  var three= Math.floor(Math.random()*11+1)
    $("#three").on("click", function() {
      clicktotal = clicktotal + three;
      console.log(three);
      $("#totalscore").text(clicktotal);
        if (clicktotal == number){
          win();
          $("#result").text("You Won!");
        }
        else if ( clicktotal > number){
          loss();
          $("#result").text("You Lost!");
        }   
});

      var four= Math.floor(Math.random()*11+1)
    $("#four").on("click", function() {
      clicktotal = clicktotal + four;
      console.log(four);
      $("#totalscore").text(clicktotal);
        if (clicktotal == number){
          win();
          $("#result").text("You Won!");
        }
        else if ( clicktotal > number){
          loss();
          $("#result").text("You Lost!");
        }   
});


function reset(){

  clicktotal = 0;
  $("#totalscore").text(clicktotal);

  Random = Math.floor(Math.random()*101+19);
  $("#randomNumber").text(Random);
      
  one = Math.floor(Math.random()*11+1);
  two = Math.floor(Math.random()*11+1);
  three = Math.floor(Math.random()*11+1);
  four = Math.floor(Math.random()*11+1);
      
} 

function win(){
  wins++; 
  $("#numberWins").text(wins);
  reset();
}
function loss(){
  losses++;
  $("#numberLosses").text(losses);
  reset();
}

