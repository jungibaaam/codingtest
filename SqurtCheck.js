function solution(n) {
    var answer = 0;
    var i = Math.sqrt(n);
    
    if (Number.isInteger(i)) {
        i = i + 1;
        answer = Math.pow(i, 2);
    } else {
        answer = -1;
    }
    return answer;
}