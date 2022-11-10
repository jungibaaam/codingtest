function solution(A,B){
    var answer = 0;
    A.sort(function(a, b){ return a - b; });
    B.sort(function(a, b){ return a - b; }).reverse();
    for(i = 0; i <= A.length - 1; i ++) {
        answer += A[i] * B[i];
    }
    return answer;
}