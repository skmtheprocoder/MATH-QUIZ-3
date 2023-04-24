
player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");

player1score = 0;
player2score = 0;


document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player2_name").innerHTML = player2 + ":";

document.getElementById("player_question").innerHTML = "Question Turn - "+ player1;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player2;

function send (){

    number1 = document.getElementById("number1").value ;
    console.log(number1);
    number2 = document.getElementById("number2").value ;
    console.log(number2);
    actualans = parseInt(number1) * parseInt(number2);

    question_no = "<h4>" + number1 + "X" + number2 + "</h4>";
    inputbox = "<br> Answer : <input type = 'text' id = 'input_check_box'> ";
    checkbutton = "<br><br> <button class = 'btn btn-info' onclick = 'check()' > Check </button>";
    row = question_no + inputbox + checkbutton ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
