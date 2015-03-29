var lastPlayed = 'X';
$(document).ready(function($){
    $('td').click(function(){
        clickCase($(this));
        if(detectWin()) {
            blockGame();
            displayWinAlert();
        }
    });
});

function clickCase(clickedBox){
    if(!clickedBox.hasClass('filled')) {
        if(lastPlayed === 'X') {
            clickedBox.text('O').addClass('filled');
            lastPlayed = 'O';
        } else {
            clickedBox.text('X').addClass('filled');
            lastPlayed = 'X';
        }
    }
}

function detectWin(){
    return false;
}