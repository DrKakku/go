let board =
    [
        [' ', '', ' '],
        [' ', '', ''],
        ['', ' ', '']
    ];
let colorl = [163, 210, 202];
let color = [232, 222, 210];
let player = ["X", "O"];
let currentPlayer;
let avalable = [];
let arrRect = [];
let score = [0, 0, 0];
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
    background(94, 170, 168);
    screenChange();
    render();
    win();


}

function mousePressed() {
    screenChange();
    render();
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
        console.log("true");
        return true;
    }
    else { return false; }
}


function win() {

    for (let i = 0; i < 3; i++) {
        if (equ3(board[0][i], board[1][i], board[2][i]) && board[0][i] != "") {
            render();


            if (currentPlayer == player[0]) {
                currentPlayer = player[1];
                score[1]++;
            }
            else {
                score[0]++;
                currentPlayer = player[0];
            }
            alert(currentPlayer + " Won \n congratulation \n╰(*°▽°*)╯♪(^∇^*)(≧∀≦)ゞo(*￣︶￣*)o);");
            move = " and won by " + currentPlayer;
            reset();
        }


        else if (equ3(board[i][0], board[i][1], board[i][2]) && board[i][0] != "") {
            render();
            if (currentPlayer == player[0]) {
                currentPlayer = player[1];
                score[1]++;
            }
            else {
                score[0]++;
                currentPlayer = player[0];
            }
            alert(currentPlayer + " Won \n congratulation \n╰(*°▽°*)╯♪(^∇^*)(≧∀≦)ゞo(*￣︶￣*)o);");
            move = "and won by " + currentPlayer;
            reset();
        }


        else if (equ3(board[0][0], board[1][1], board[2][2]) && board[i][0] != "") {
            render();
            if (currentPlayer == player[0]) {
                currentPlayer = player[1];
                score[1]++;
            }
            else {
                score[0]++;
                currentPlayer = player[0];
            }
            alert(currentPlayer + " Won \n congratulation \n╰(*°▽°*)╯♪(^∇^*)(≧∀≦)ゞo(*￣︶￣*)o);");
            move = " and won by " + currentPlayer;
            reset();

        }


        else if (equ3(board[0][2], board[1][1], board[2][0]) && board[i][0] != "" ) {
            render();
            if (currentPlayer == player[0]) {
                currentPlayer = player[1];
                score[1]++;
            }
            else {
                score[0]++;
                currentPlayer = player[0];
            }
            alert(currentPlayer + " Won \n congratulation \n╰(*°▽°*)╯♪(^∇^*)(≧∀≦)ゞo(*￣︶￣*)o);");
            move = " and won by " + currentPlayer;
            reset();

        }


        else if (play >= 9) {
            alert("It was a Tie \n no one Won (～￣▽￣)～(～￣▽￣)～");
            score[2]++;
            reset();
        }

    }

}

function reset() {
    board =
        [
            [' ', '', ' '],
            [' ', '', ''],
            ['', ' ', '']
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
            fill(5, 102, 118);
            (rect(x, y, w / 2, h / 2, 9));
            arrRect.push(rct);
            //Indivusial elements
            fill(color);
            strokeWeight(3);
            textSize(60);
            //Alignning the symbols
        // if(j == 0)textAlign(CENTER,BASELINE);
        //     else if(j == 2 )textAlign(CENTER,CENTER);
        //     else if( j == 1)    

            textAlign(CENTER,BOTTOM);
            text(spot, x, y);
            //title
            textSize(50);
            strokeWeight(0);
            fill(color);
            textAlign(LEFT,CENTER);
            text("Tic Tac Toe", w *2-h/2 , h - h /2);

            //Bottom text
            textSize(30);
            strokeWeight(0);
            fill(color);
            textAlign(CENTER,CENTER);
            text("Moved " + move, ((w*5)/3) , h * 5 - (h / 3)*2);
            //score counter
            fill(color);
            textSize(18);
            textAlign(LEFT,BASELINE);
            text("Current Score | player 1 = " + score[0] +  " | Tie = " + score[2] + " | Player 2 = " + score[1]+"|", w / 9, h * 5 - h / 6);
        }
    }
    strokeWeight(5);
    stroke(colorl);
    line(windowWidth / 5 * 2, windowHeight / 5, windowWidth / 5 * 2, windowHeight - windowHeight / 5);
    line(windowWidth / 5 * 3, windowHeight / 5, windowWidth / 5 * 3, windowHeight - windowHeight / 5);
    line(windowWidth / 5, windowHeight / 5 * 2, windowWidth - windowWidth / 5, windowHeight / 5 * 2);
    line(windowWidth / 5, windowHeight / 5 * 3, windowWidth - windowWidth / 5, windowHeight / 5 * 3);

}
