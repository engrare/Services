var window_height, window_width;
var is_mobile_phone = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;
// Sudoku tahtası
const board1 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

var board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function yes() {
console.log($("#divv").text());
console.log($('#solvedTable').text());
}
function getSudoku(board) {
			console.log($("#tr" + 1).children("#td" + 1).text());


	for(let i = 1; i <= 9; i++)
		for(let j = 1; j <= 9; j++) {
			//board[i-1][j-1] = parseInt($("#tr" + i).children("#td" + j).text()) ? parseInt($("#tr" + i).children("#td" + j).text()) : 0;
			if(Number.isNaN(parseInt($("#tr" + i).children("#td" + j).text())))
				board[i-1][j-1] = 0;
			else
				board[i-1][j-1] = parseInt($("#tr" + i).children("#td" + j).text());
		}
			
	printSudoku(board);
solveSudoku(board);
}


// Sudoku çözme işlevi
function solveSudoku(board) {
  const emptySpot = findEmptySpot(board);
  if (!emptySpot) {
    	printSudokuToScreen(board);
	printSudoku(board);
    return true;
  }
  
  const [row, col] = emptySpot;

  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;

      if (solveSudoku(board)) {
        return true;
      }

      // Yanlış numara seçimi, geri al
      board[row][col] = 0;
    }
  }

  // Sudoku çözülemedi
  return false;
}

// Boş bir nokta bulma işlevi
function findEmptySpot(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }

  // Boş nokta bulunamadı
  return null;
}

// Geçerli bir numara seçimi kontrolü
function isValid(board, row, col, num) {
  // Satır kontrolü
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }

  // Sütun kontrolü
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }

  // Bölge kontrolü
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}

// Sudoku çözümünü yazdırma
function printSudoku(board) {
  for (let row = 0; row < 9; row++) {
    let rowString = '';
    for (let col = 0; col < 9; col++) {
      rowString += board[row][col] + ' ';
    }
    console.log(rowString);
  }
}

function printSudokuToScreen(board) {
  	for(let i = 1; i <= 9; i++)
		for(let j = 1; j <= 9; j++) 
			$("#tr" + i).children("#td" + j).text(board[i-1][j-1]);
}







$( document ).ready(function() {
	
	
	$(".logout").click(function(){
		location.replace("../../panelgiris.html");
	});
	
	
	
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
	setTimeout(function() { beReadyPage();}, 1000);
});


$(document).keydown(function(e){
	//e.preventDefault();
	
	if(e.keyCode == 13)
	;
	
	//console.log(selected_book_index);
});




$(window).scroll(function(event){
	
	
	
	
});


function beReadyPage () {
	window_height = parseInt($( window ).height());
	window_width = parseInt($( window ).width());
	
}




$( window ).resize(function() {

});