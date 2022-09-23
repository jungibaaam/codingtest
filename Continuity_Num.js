function solution(n) {
    var answer = 1;
    var sum = 0;
    var startnum = 1;
    var lastnum = Math.ceil(n / 2);
    
    if(n == 1) {
        return answer = 1;
    }
    
    while(startnum <= lastnum) {
        for(let cal = startnum; sum <= n; cal ++) {
            sum = sum + cal;
            if(sum == n) {
                answer ++;
                break;
            }
        }
        sum = 0;
        startnum ++;
    }
    
    return answer;
}