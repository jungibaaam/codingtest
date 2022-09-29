function solution(x) {
    var answer = false;
    var num = x.toString();
    var sum = 0;
    var count = 0;
    while(count != num.length) {
        sum += parseInt(num[count]);
        count ++;
    }
    if(x % sum == 0) {
        return answer = true;
    }
    return answer;
}