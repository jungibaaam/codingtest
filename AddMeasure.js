function solution(n) {
    var answer = 0;
    var half = Math.ceil(n / 2);

    for(i = 0; i <= n; i ++) {
        if(i > half) {
            answer += n;
            break;
        }
        if(n % i == 0) {
            answer += i;
            console.log(answer);
        }
    }
    return answer;
}