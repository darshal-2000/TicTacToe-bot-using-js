function setflag(){
	if(localStorage.getItem("pos")=="first"){
		flag=1;
	}
	else{
		flag=0;
	}
}
function myfunc() {
	var board=new Array();
	var letter;
	board[0]="";
	board[1] = document.getElementById("b1").value;
	board[2] = document.getElementById("b2").value;
	board[3] = document.getElementById("b3").value;
	board[4] = document.getElementById("b4").value;
	board[5] = document.getElementById("b5").value;
	board[6] = document.getElementById("b6").value;
	board[7] = document.getElementById("b7").value;
	board[8] = document.getElementById("b8").value;
	board[9] = document.getElementById("b9").value;
	if ((board[1] == 'X' && board[2] == 'X' && board[3] == 'X') ||
		(board[1] == 'X' && board[4] == 'X' && board[7] == 'X') ||
		(board[7] == 'X' && board[8] == 'X' && board[9] == 'X') ||
		(board[3] == 'X' && board[6] == 'X' && board[9] == 'X') ||
		(board[1] == 'X' && board[5] == 'X' && board[9] == 'X') ||
		(board[3] == 'X' && board[5] == 'X' && board[7] == 'X') ||
		(board[2] == 'X' && board[5] == 'X' && board[8] == 'X') ||
		(board[4] == 'X' && board[5] == 'X' && board[6] == 'X')){
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
	else if ((board[1] == '0' && board[2] == '0' && board[3] == '0') ||
		(board[1] == '0' && board[4] == '0' && board[7] == '0') ||
		(board[7] == '0' && board[8] == '0' && board[9] == '0') ||
		(board[3] == '0' && board[6] == '0' && board[9] == '0') ||
		(board[1] == '0' && board[5] == '0' && board[9] == '0') ||
		(board[3] == '0' && board[5] == '0' && board[7] == '0') ||
		(board[2] == '0' && board[5] == '0' && board[8] == '0') ||
		(board[4] == '0' && board[5] == '0' && board[6] == '0')){
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
  
	else if(isBoardFull(board)){
		document.getElementById('print').innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {
		if (flag == 1) {
			document.getElementById('print').innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print').innerHTML = "Player 0 Turn";
			a="b".concat(findBestMove(board).toString());
			document.getElementById(a).value = "0" ;
			document.getElementById(a).disabled =true;
			flag=1;
			myfunc();
		}
	}
}

function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

flag = 1;
function myfunc_3() {
	document.getElementById("b1").value = "X";
	document.getElementById("b1").disabled = true;
	flag = 0;
	myfunc();
}

function myfunc_4() {
	document.getElementById("b2").value = "X";
	document.getElementById("b2").disabled = true;
	flag = 0;
	myfunc();
}

function myfunc_5() {
	document.getElementById("b3").value = "X";
	document.getElementById("b3").disabled = true;
	flag = 0;
	myfunc();
}

function myfunc_6() {
	document.getElementById("b4").value = "X";
	document.getElementById("b4").disabled = true;
	flag = 0;
	myfunc();
}

function myfunc_7() {
	document.getElementById("b5").value = "X";
	document.getElementById("b5").disabled = true;
	flag = 0;
	myfunc();
}

function myfunc_8() {
	document.getElementById("b6").value = "X";
	document.getElementById("b6").disabled = true;
	flag = 0;
	myfunc();
}

function myfunc_9() {
	document.getElementById("b7").value = "X";
	document.getElementById("b7").disabled = true;
	flag = 0;
	myfunc();
}

function myfunc_10() {
	document.getElementById("b8").value = "X";
	document.getElementById("b8").disabled = true;
	flag = 0;
	myfunc();
}

function myfunc_11() {
	document.getElementById("b9").value = "X";
	document.getElementById("b9").disabled = true;
	flag = 0;
	myfunc();
}
function isWinner(board,letter){
	if((board[1]==letter && board[2]==letter && board[3]==letter) ||
			(board[4]==letter && board[5]==letter && board[6]==letter) ||
			(board[7]==letter && board[8]==letter && board[9]==letter) ||
			(board[1]==letter && board[4]==letter && board[7]==letter) ||
			(board[2]==letter && board[5]==letter && board[8]==letter) ||
			(board[3]==letter && board[6]==letter && board[9]==letter) ||
			(board[1]==letter && board[5]==letter && board[9]==letter) ||
			(board[3]==letter && board[5]==letter && board[7]==letter)){
				return true;
			}
		else{
			return false;
		}
}
function isBoardFull(board){
	if ((board[1] == "X" || board[1] == "0") && (board[2] == "X" || board[2] == "0") && (board[3] == "X" || board[3] == "0") &&
		(board[4] == "X" || board[4] == "0") && (board[5] == "X" || board[5] == "0") && (board[6] == "X" || board[6] == "0") &&
		(board[7] == "X" || board[7] == "0") && (board[8] == "X" || board[8] == "0") && (board[9] == "X" || board[9] == "0")) {
			return true;
	}
	else{
		return false;
	}
}
function isSpaceFree(b, move){
	if(b[move] == ""){
		return true;
	}
	else{
		return false;
	}
}
function minimax(b, depth, isMax, alpha, beta){
	
	var best;
	
	if (isWinner(b,"0")){
		return 10;
	}
	if (isWinner(b,"X")){
		return -10;
	}
	if (isBoardFull(b)){
		return 0;
	}
	if (isMax){
		best = -1000; 
		
	var i;
		for(i=1;i<10;i++){
			if (isSpaceFree(b,i)){
				b[i] = "0";
				best = Math.max(best, (minimax(b, depth+1, ! isMax, alpha, beta) - depth));
				alpha = Math.max(alpha, best);
				b[i] = "";
				if (alpha >= beta){
					break;
				}
			}
		}
		return best;
	}
	else{
		best = 1000;

		for(i=1;i<10;i++){
			if (isSpaceFree(b,i)){
				b[i] = "X";
				best = Math.min(best,( minimax(b, depth+1, ! isMax, alpha, beta) + depth));
				beta = Math.min(beta, best);
				b[i] = "";
				if (alpha >= beta){
					break;
				}
			}
		}
		return best;
	}
}
function findBestMove(b){
	var bestVal = -1000;
	var bestMove = -1;
	var moveVal;
	var i;
	for(i=1;i<10;i++){
		if(isSpaceFree(b,i)){
			b[i] = "0";

			moveVal = minimax(b, 0, false, -1000, 1000);

			b[i]="";
			if (moveVal > bestVal){
				bestMove = i;
				bestVal = moveVal;
			}
		}
	}
	return bestMove;
}