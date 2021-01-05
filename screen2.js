function send(){
   number1 = document.getElementById("number1_input").value;
   number2 = document.getElementById("number2_input").value;
   actual_answer = parseInt(number1) * parseInt(number2);

   question_number = "<h4>"+number1+"*"+number2+"</h4>";
   input_box = "<br> Answer : <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>check</button>";
   img = "<img src = 'female-clipart-thinking-9.png' width = 100px height = 125px>"
   row = question_number + input_box + check_button + img;

   document.getElementById("output").innerHTML = row;
   document.getElementById("number1_input").value = " ";
   document.getElementById("number2_input").value = " ";
   var popupImage = "<img src = 'https://media3.giphy.com/media/WsSFNQkz3t9kJ8Ivnu/giphy.gif' width = 250px height = 250px>";
   document.getElementById("popupDiv").innerHTML = popupImage;
}
var player1_nameVar = localStorage.getItem("player1");
var player2_nameVar = localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML = player1_nameVar + " :  ";
document.getElementById("player2_name").innerHTML = player2_nameVar + " :  ";

document.getElementById("player_question").innerHTML ="Question turn : " + player1_nameVar ;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player2_nameVar ;

var player1_scoreVar = 0;
var player2_scoreVar = 0;

document.getElementById("player1_score").innerHTML = " " + player1_scoreVar;
document.getElementById("player2_score").innerHTML = " " + player2_scoreVar;

var question_turn = "player1";
var answer_turn = "plaayer2";

function check(){
   get_ans  = document.getElementById("input_check_box").value;
   if(get_ans == actual_answer){
   popupImage = "<img src = 'https://media1.tenor.com/images/06ae072fb343a704ee80c2c55d2da80a/tenor.gif?itemid=14090897' width = 250px height = 225px>";
   document.getElementById("popupDiv").innerHTML = popupImage;
   
      if(answer_turn == "player1"){
         player1_scoreVar = player1_scoreVar + 1;
         document.getElementById("player1_score").innerHTML = player1_scoreVar;
         
      }else{
         player2_scoreVar = player2_scoreVar + 1;
         document.getElementById("player2_score").innerHTML = player2_scoreVar; 
      }
   }else{
      popupImage = "<img src = 'wrong-mark.gif' width = 300px height = 250px>";
   document.getElementById("popupDiv").innerHTML = popupImage;
   }
   if(question_turn == "player1"){
      question_turn = "player2";
      document.getElementById("player_question").innerHTML = "Question turn - " + player2_nameVar;
      answer_turn = "player1";
      document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_nameVar;
   }else{
      answer_turn = "player2";
      document.getElementById("player_answer").innerHTML = "ASnswer turn - " + player2_nameVar;
      question_turn = "player1";
      document.getElementById("player_question").innerHTML = "Question turn - " + player1_nameVar;

   }
}