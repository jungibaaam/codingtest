function solution(arr) {
    var answer = 0;
    var len = arr.length;
    var sum = 0;
    
    for (i = 0; i < len; i ++) {
        sum += arr[i];
    }
    answer = sum / len;
    
    return answer;
}