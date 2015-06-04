var lastPlayed = 'X';
$(document).ready(function($) {
    $('td').click(function() {
        clickCase($(this));
        if (detectWin()) {
            blockGame();
            displayWinAlert();
        }
    });
});

function clickCase(clickedBox) {
    if (!clickedBox.hasClass('filled')) {
        if (lastPlayed === 'X') {
            clickedBox.text('O').addClass('filled');
            lastPlayed = 'O';
        } else {
            clickedBox.text('X').addClass('filled');
            lastPlayed = 'X';
        }
    }
}

function detectWin() {

    // Check rows
    var win = false,
        symbol = "",
        count = 0;

    $('#line1,#line2,#line3').each(function() {
        count = 0;

        $(this).find('td').each(function() {

            if ($(this).hasClass('filled')) {

                symbol = symbol.length == 1 ? symbol : $(this).text();

                if ($(this).text() != symbol) {
                    return false; // exits this $.each loop if the row is invalid.
                } else {
                    count += 1;
                }

                if (count == 3) {
                    win = true;
                    return true;
                }
            } else { // If the cell is empty
                return false; //exits this $.each loop.
            }
        });
    });

    // Check columns

    // Check diagonals
    console.log(win);
    if (win) {
        return true;
    }
    return false;
}

function blockGame() {
    $('td').unbind('click');
    alert("You win!");
}

function displayWinAlert() {

}
