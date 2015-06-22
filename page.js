var lastPlayed = 'X';
$(document).ready(function($) {
    $('td').click(function() {
        clickCase($(this));
        if(detectWin($)) {
            blockGame();
            displayWinAlert();
        }
    });
});

function clickCase(clickedBox) {
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

function detectWin($) {
    var win = false;

    $('table tr').each(function () {
        var valueToVerify = '';
        var row = $(this);
        $(row).children('td').each(function(indx) {
            var currentValue = $(this).text();
            
            if(currentValue !== '') {
                if(indx == 0) {
                    valueToVerify = currentValue;
                } else {
                    if(valueToVerify !== currentValue) {
                        return false;
                    } else {
                        if(indx === row.children('td').length -1) {
                            win = true;
                            return false;
                        }
                    }
                }    
            } else {
                return false;
            }
        });
    });

    return win;
}

function blockGame() {
    alert('win');
}

function displayWinAlert() {

}