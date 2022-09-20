function solution(a, b) {
    var answer = 0;
    var sum;
    
    if(a >= b) {
        sum = a - b;
        for(i = 0; i < sum + 1; i ++) {
            answer += b + i;
        }
    } else if(b >= a) {
        sum = b - a;
        for(i = 0; i < sum + 1; i ++) {
            answer += a + i;
        }
    }
    
    return answer;
}