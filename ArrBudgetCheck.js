function solution(d, budget) {
    var answer = 0;
    d.sort(function(a, b) { return a - b;});
    
    while(budget >= 0) {
        if((budget -= d[0]) >= 0) {         
            d.shift();
            answer ++;
        } else {
            break;
        }
    }
    return answer;
}