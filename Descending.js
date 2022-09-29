function solution(n) {
    var answer = 0;
    n = n.toString().split('').sort();
    answer = parseInt(n.reverse().join(''));
    return answer;
}