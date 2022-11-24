function solution(numbers) {
    var comp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var answer = comp.filter(x => !numbers.includes(x));
    answer = answer.reduce((a,b) => (a+b));
    return answer;
}