function solution(ingredient) {
    var answer = 0;
    for(i=0; i<ingredient.length; i++){
        if(ingredient[i] == 1){
            if(ingredient[i+1] == 2){
                if(ingredient[i+2] == 3){
                    if(ingredient[i+3] == 1){
                        answer += 1;
                        ingredient.splice(i, 4);
                        i += -4;
                    }
                }
            }
        }
    }
    return answer;
}