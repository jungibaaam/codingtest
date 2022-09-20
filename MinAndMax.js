function solution(s) {
    var answer = '';
    var word;
    var toNumbers = arr => arr.map(Number);
    var min;
    var max;
    var NumArray;
    
    word = s.split(" ");
    NumArray = toNumbers(word);
    
    min = Math.min.apply(null, NumArray);
    max = Math.max.apply(null, NumArray);
    
    answer = `${min} ${max}`
    return answer;
}