let board =
[
    ['1','X','X'],
    ['X','X','X'],
    ['X','X','O']
];

// let width = windowWidth;
// let height = windowHeight;

let player1 = "X";
let player2 = "O";

function setup()
{
    createCanvas(windowWidth,windowHeight);
    
}

function draw()
{   
    background(30,30,50);
    screenChange();

    let w = windowWidth/3+100;
    let h = windowHeight/3+300;
    
    for(let i = 0 ; i < 3 ;i++ )
    {
        for(let j = 0; j < 3 ; j++)
        {   
            let borderW = (windowWidth / 37 )*10 +20;
            let borderH = (windowHeight / 4)+90;

            let x = (w / 2 * i ) + borderW;
            let y = (h / 3 * j ) + borderH;
            let spot = board[i][j];
            textSize(32);
            fill(255);
            text(spot,x,y);
        }
    }

}

function screenChange()
{
	if(height != windowHeight || width != windowWidth){
		createCanvas(windowWidth, windowHeight);
		let height = windowHeight;
		let width = windowWidth;
		
	}
}