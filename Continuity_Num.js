function solution(n) {
    var answer = 1;
    var sum = 0;
    var startnum = 1;
    var lastnum = Math.ceil(n / 2);
    console.log(n , lastnum)
    
    while(startnum <= lastnum) {
        console.log("while startnum = " + startnum)
        for(let cal = startnum; sum <= n; cal ++) {
            console.log("for cal = " + cal)
            sum = sum + cal;
            console.log("sum is " + sum)
            if(sum == n) {
                answer ++;
                console.log("answer = "+ answer)
                break;
            }
        }
        sum = 0;
        startnum ++;
    }
    
    return answer;
}