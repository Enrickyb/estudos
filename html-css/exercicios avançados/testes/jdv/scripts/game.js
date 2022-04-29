let board = ['','','','','','','','','']
let playerTime = 0
let symbols = ['x','o']



function movement(position) {
    board[position] = symbols[playerTime]

    if(playerTime == 0){
        playerTime = 1
    }else{
        playerTime = 0
    }

}