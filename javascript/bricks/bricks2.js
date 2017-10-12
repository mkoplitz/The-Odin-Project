var area = 32;
var val1 = 70;
var val2 = 130;
var val3 = 180;
var color = "rgb(" + val1 + "," + val2 + "," + val3 + ")";

$(document).ready(function() {
    createTable(area);
    hoverOver();
    resize();
    clear();
    erase();
    red();
    blue()
    green();
    lsd();
});

function createTable(area) {
    $('table').empty();
    for (i = 0; i < area; i++) {
        $('table').append('<tr></tr>')
    };
    for (j = 0; j < area; j++) {
        $('tr').append('<td></td>')
    };
}

function hoverOver() {
    $('td').hover(function() {
        $(this).css("background-color", color);
    });
}

/* This code was used previously to calculate a random color using the RGB format, but for each cell individually. However, since I did not write it myself, it will not be a part of the final revision. I've kept it here simply because I think it's cool.
function hoverOver() {
    $('td').hover(function() {
        $(this).css("background-color",
            "rgb(" + Math.floor(Math.random() * 256).toString() + "," + Math.floor(Math.random() * 256).toString() + "," + Math.floor(Math.random() * 256).toString() + ")");
    });
}
*/

function resize() {
    $(".resize").on('click', function() {
        var input = prompt("Pick a number between 1 and 100 (Default is 32)");
        if (input != null && input >= 1 && input <= 100) {
            area = parseInt(input);
            createTable(area);
            hoverOver();
        } else if (input == null || input == "") {} else {
            alert("Sorry bub, not a valid number!");
        }
    });
}

function clear() {
    $(".clear").on('click', function() {
        createTable(area);
        hoverOver();
    });
}

function erase() {
    $(".erase").on('click', function() {
        color = "rgb(230, 230, 230)";
    });
}

function red() {
    $(".red").on('click', function() {
        color = "tomato";
    });
}

function blue() {
    $(".blue").on('click', function() {
        color = "steelblue";
    });
}

function green() {
    $(".green").on('click', function() {
        color = "seagreen";
    });
}

function rand() {
    val1 = Math.floor(Math.random() * 256).toString();
    val2 = Math.floor(Math.random() * 256).toString();
    val3 = Math.floor(Math.random() * 256).toString();
    console.log("rgb(" + val1 + ", " + val2 + ", " + val3 + ")");
}

function lsd() {
    $(".lsd").on('click', function() {
        rand();
        color = "rgb(" + val1 + "," + val2 + "," + val3 + ")";
    });
}