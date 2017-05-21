
var totalUserScore = 0;
var randomTargetNum = Math.floor(Math.random() * (102)) + 19; 
var wins = 0; 
var losses = 0;


//var hiddenVal = Math.floor(Math.random() * (12)) + 1;
function startGame (){
	randomTargetNum = Math.floor(Math.random() * (102)) + 19;
	$("#randomNumber").html(randomTargetNum);

  //randomize a # 1-12 hides the values
  $("#roundCrystal").attr("hiddenVal", Math.floor(Math.random() * (12)) + 1);

  $("#funCrystal").attr("hiddenVal", Math.floor(Math.random() * (12)) + 1);

  $("#diamondCrystal").attr("hiddenVal", Math.floor(Math.random() * (12)) + 1);

  $("#hexCrystal").attr("hiddenVal", Math.floor(Math.random() * (12)) + 1);

  totalUserScore = 0

  $('#totalScore').html(totalUserScore);

}

//Code inside this function will only run once. 
$(document).ready(function() {

//displays a random target number each time the page reloads
startGame()

$(".crystals").on("click", function() {
	var crystalValue = ($(this).attr("hiddenVal"));
	crystalValue = parseInt(crystalValue);
	totalUserScore = totalUserScore + crystalValue; 
	$('#totalScore').html(totalUserScore);
	if (totalUserScore === randomTargetNum) {
		wins++;
		$('#Ws').html('WINS: ' + wins);
		swal(
			'YOU WIN!',
			'PLAY AGAIN',
			'success'
			);
		startGame()
	} 

	else if (totalUserScore > randomTargetNum){
		losses++;
		$('#Ls').html('LOSSES: ' + losses);
		swal('YOU LOSE',
			'TRY AGAIN???'
			);
		startGame()	
	}

})


});





