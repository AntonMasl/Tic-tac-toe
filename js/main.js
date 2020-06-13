$(function () {
    let count = 0;
    let arr = [[$('#cel-1'), $('#cell-2'), $('#cell-3')],
    [$('#cel-4'), $('#cell-5'), $('#cell-6')],
    [$('#cel-7'), $('#cell-8'), $('#cell-9')]];
    function endGame(winner) {
        setTimeout(() => {
            showWinner(winner);
            clearField(winner);
        }, 30);
    }
    function clearField(winner) {
        if (winner == 'cross')
            count = -1;
        else if (winner == 'zero')
            count = 0;
        else
            if (count == 9) {
                count = -1;
            }
            else count = 0;
        $('td').removeClass('cross zero').addClass('active');
    }
    function showWinner(winner) {
        if (winner == 'cross') {
            alert('победили крестики');
        }
        else if (winner == 'zero') alert('победили нолики');
        else alert('Ничья');
    }
    $('tr').on('click', '.active', function () {
        if (count % 2 == 0) {
            $(this).addClass('cross');
            let i = $(this).parent().attr('data-index');
            let j = $(this).attr('data-index');
            arr[i][j] = $(this);
            if ($('td').hasClass('active')) {
                $(this).removeClass('active');
                if (arr[0][0].hasClass('cross') && arr[0][1].hasClass('cross') && arr[0][2].hasClass('cross')) {
                    endGame('cross');
                }
                else if (arr[1][0].hasClass('cross') && arr[1][1].hasClass('cross') && arr[1][2].hasClass('cross')) {
                    endGame('cross');
                }
                else if (arr[2][0].hasClass('cross') && arr[2][1].hasClass('cross') && arr[2][2].hasClass('cross')) {
                    endGame('cross');
                }
                else if (arr[0][0].hasClass('cross') && arr[1][0].hasClass('cross') && arr[2][0].hasClass('cross')) {
                    endGame('cross');
                }
                else if (arr[0][1].hasClass('cross') && arr[1][1].hasClass('cross') && arr[2][1].hasClass('cross')) {
                    endGame('cross');
                }
                else if (arr[0][2].hasClass('cross') && arr[1][2].hasClass('cross') && arr[2][2].hasClass('cross')) {
                    endGame('cross');
                }
                else if (arr[0][0].hasClass('cross') && arr[1][1].hasClass('cross') && arr[2][2].hasClass('cross')) {
                    endGame('cross');
                }
                else if (arr[0][2].hasClass('cross') && arr[1][1].hasClass('cross') && arr[2][0].hasClass('cross')) {
                    endGame('cross');
                }
                else if (count == 8) {
                    endGame('drow');
                }
            }
        }
        else {
            $(this).addClass('zero');
            let i = $(this).parent().attr('data-index');
            let j = $(this).attr('data-index');
            arr[i][j] = $(this);
            $(this).removeClass('active');
            if (arr[0][0].hasClass('zero') && arr[0][1].hasClass('zero') && arr[0][2].hasClass('zero')) {
                endGame('zero');
            }
            else if (arr[1][0].hasClass('zero') && arr[1][1].hasClass('zero') && arr[1][2].hasClass('zero')) {
                endGame('zero');
            }
            else if (arr[2][0].hasClass('zero') && arr[2][1].hasClass('zero') && arr[2][2].hasClass('zero')) {
                endGame('zero');
            }
            else if (arr[0][0].hasClass('zero') && arr[1][0].hasClass('zero') && arr[2][0].hasClass('zero')) {
                endGame('zero');
            }
            else if (arr[0][1].hasClass('zero') && arr[1][1].hasClass('zero') && arr[2][1].hasClass('zero')) {
                endGame('zero');
            }
            else if (arr[0][2].hasClass('zero') && arr[1][2].hasClass('zero') && arr[2][2].hasClass('zero')) {
                endGame('zero');
            }
            else if (arr[0][0].hasClass('zero') && arr[1][1].hasClass('zero') && arr[2][2].hasClass('zero')) {
                endGame('zero');
            }
            else if (arr[0][2].hasClass('zero') && arr[1][1].hasClass('zero') && arr[2][0].hasClass('zero')) {
                endGame('zero');
            }
            else if ((count == 7) && !($('td').hasClass('active'))) {
                endGame('drow');
            }
        }
        count += 1;
    });
});

