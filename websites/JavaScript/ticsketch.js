let board =
    [
        [' ', '', ' '],
        [' ', '', ''],
        ['', ' ', '']
    ];
let color = 189;
let player = ["X", "O"];
let currentPlayer;
let avalable = [];
let arrRect = [];
let move = "nothing", play = 0;
let ind = { 0: [0, 0], 1: [0, 1], 2: [0, 2], 3: [1, 0], 4: [1, 1], 5: [1, 2], 6: [2, 0], 7: [2, 1], 8: [2, 2] };
let winner = null;
function setup() {
    createCanvas(windowWidth, windowHeight);
    currentPlayer = player[0];
    for (let i = 0; i < 9; i++) {

        avalable.push(true);

    }

}

function draw() {
    background(30, 30, 50);
    screenChange();
    render();
    win();


}

function mousePressed() {
    for (let i = 0; i < 9; i++) {
        let x;
        if (windowWidth / 5 > windowHeight / 5) { x = windowHeight / 5; }
        else { x = windowWidth / 5; }

        let d = dist(mouseX, mouseY, arrRect[i][0][0], arrRect[i][0][1]);
        if (d < windowWidth / 10 && d < windowHeight / 10) {

            if (currentPlayer == player[0] && avalable[i] == true) {
                avalable[i] = false;
                board[ind[i][0]][ind[i][1]] = player[0];
                move = player[0];
                currentPlayer = player[1];
                play++

            }
            else if (currentPlayer == player[1] && avalable[i] == true) {
                avalable[i] = false;
                move = player[1];
                board[ind[i][0]][ind[i][1]] = player[1];
                currentPlayer = player[0];
                play++;
            }

        }
    }
    arrRect = [];
}
function equ3(a, b, c) {
    if (a == b && b == c && a == c) {
        return true;
    }
    else { return false; }
}


function win() {
    if (play >= 9) {
        alert("It was a Tie \n no one Won (～￣▽￣)～(～￣▽￣)～");
        reset();
    }
    for (let i = 0; i < 3; i++) {
        if (equ3(board[0][i], board[1][i], board[2][i]) && board[0][i] != "" && board[i][0] != "") {
            if (currentPlayer == player[0]) currentPlayer = player[1];
            else currentPlayer = player[0];
            alert(currentPlayer + " Won \n CONGRACHULATIONS \n╰(*°▽°*)╯♪(^∇^*)(≧∀≦)ゞo(*￣︶￣*)o);");
            move = " and  " + currentPlayer;
            reset();
        }
        else if (equ3(board[i][0], board[i][1], board[i][2]) && board[i][0] != "" && board[i][0] != "") {
            if (currentPlayer == player[0]) currentPlayer = player[1];
            else currentPlayer = player[0];
            alert(currentPlayer + " Won \n CONGRACHULATIONS \n╰(*°▽°*)╯♪(^∇^*)(≧∀≦)ゞo(*￣︶￣*)o);");
            move = " won  " + currentPlayer;
            reset();
        }
        else if (equ3(board[0][0], board[1][1], board[2][2]) && board[i][0] != "" && board[i][0] != "") {
            if (currentPlayer == player[0]) currentPlayer = player[1];
            else currentPlayer = player[0];
            alert(currentPlayer + " Won \n CONGRACHULATIONS \n╰(*°▽°*)╯♪(^∇^*)(≧∀≦)ゞo(*￣︶￣*)o);");
            move = " By " + currentPlayer;
            reset();

        }
        else if (equ3(board[0][2], board[1][1], board[2][0]) && board[i][0] != "" && board[i][0] != "") {
            if (currentPlayer == player[0]) currentPlayer = player[1];
            else currentPlayer = player[0];
            alert(currentPlayer + " Won \n CONGRACHULATIONS \n╰(*°▽°*)╯♪(^∇^*)(≧∀≦)ゞo(*￣︶￣*)o);");
            move = " and won By " + currentPlayer;
            reset();

        }

    }

}

function reset() {
    board =
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

    play = 0;
    currentPlayer = player[0];
    avalable = [];
    for (let i = 0; i < 9; i++) {

        avalable.push(true);

    }


}

function screenChange() {
    if (height != windowHeight || width != windowWidth) {
        createCanvas(windowWidth, windowHeight);
        let height = windowHeight;
        let width = windowWidth;
    }
}

function render() {
    let w = windowWidth / 5;
    let h = windowHeight / 5;
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {


            let x = (w * i) + w / 2 * 3;
            let y = (h * j) + h / 2 * 3;
            let spot = board[j][i];
            let rct = [];
            rct.push([x, y]);
            strokeWeight(0);
            rectMode(RADIUS);
            fill(30, 30, 50);
            (rect(x, y, w / 2, h / 2, 7));
            arrRect.push(rct);
            fill(color);
            strokeWeight(3);
            textSize(40);
            text(spot, x, y);
            strokeWeight(0);
            fill(50, 120, 150);
            text("Moved " + move, w * 2, h * 5 - h / 4);
        }
    }
    strokeWeight(5);
    stroke(color);
    line(windowWidth / 5 * 2, windowHeight / 5, windowWidth / 5 * 2, windowHeight - windowHeight / 5);
    line(windowWidth / 5 * 3, windowHeight / 5, windowWidth / 5 * 3, windowHeight - windowHeight / 5);
    line(windowWidth / 5, windowHeight / 5 * 2, windowWidth - windowWidth / 5, windowHeight / 5 * 2);
    line(windowWidth / 5, windowHeight / 5 * 3, windowWidth - windowWidth / 5, windowHeight / 5 * 3);

}
