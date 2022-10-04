function solution(n, words) {
    var answer = [];
    var count = 0;
    var w = 0;
    
    while(words.length != w) {
        for(var i = 0; i < n; i ++) {
            if(words.indexOf(words[w]) != w) {
                return answer = [i + 1, count + 1];
            } else if(words[w].length == 1) {
                return answer = [i + 1, count + 1];
            } else if(w != 0 && words[w - 1][words[w - 1].length - 1] != words[w][0]) {
                return answer = [i + 1, count + 1];
            }
            w ++ ;
        }
        i = 0;
        count ++;
    }
    answer = [0, 0];
    return answer;
}