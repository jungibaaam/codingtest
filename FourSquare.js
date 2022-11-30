function solution(board)
{
    var answer = 0;
    var lenX = board.length;
    var lenY = board[0].length;
    
    if(lenX < 2 || lenY < 2){
        for(var i=0; i<lenX; i++){
            for(var j=0; j<lenY; j++){
                if(board[i][j] === 1){
                    answer = 1;
                }
            }
        }
    }else{
        for(var i=1; i<lenX; i++){
            for(var j=1; j<lenY; j++){
                if(board[i][j] === 1){
                    board[i][j] = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1]) + 1;
                    if(board[i][j] > answer){
                        answer = board[i][j];
                    }
                }
            }
        }
    }    
    return Math.pow(answer, 2);
}