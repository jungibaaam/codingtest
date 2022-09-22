function solution(s) {
    var answer = [];
    var bin = 0;
    var binarr = s;
    var zero = 0;
    var result = 0;
    var times = 0;
    var len = binarr.length;
    
    while(result != 1){
        for(i = 0; i < len; i ++) {
            if(binarr[i] == 0) {
                zero ++;
            } else if(binarr[i] == 1){
                bin ++;
            }
        }
        result = bin.toString(2);
        binarr = bin.toString(2);
        len = binarr.length;
        bin = 0;
        times ++;
    }
    answer = [times, zero]
    return answer;
}