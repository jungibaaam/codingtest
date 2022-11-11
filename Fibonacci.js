function solution(n) {
    var answer = [0, 1];
    for(i = 2; i <= n; i ++) {
        answer[i] = (answer[i - 2] + answer[i - 1]) % 1234567;
    }
    return answer.pop();
}