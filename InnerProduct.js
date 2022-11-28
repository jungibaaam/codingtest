function solution(a, b) {
    var answer = [];
    var result = 0;
    for(i=0; i<a.length; i++){
        answer.push(a[i]*b[i]);
        result += answer[i];
    }
    return result;
}