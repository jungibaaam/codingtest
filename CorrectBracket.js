function solution(s){
    var answer = true;
    var len = s.length;
    var num = 0;
    var i = 0;
    var count;
    
    // num으로 (와 )의 개수를 +1 -1 하며 체크. -1로 가는 순간 while문 종료
    while(num >= 0) {
        count = s[i];
        if(i == len) {
            break;
        }
        if(count == '(') {
            num ++
        } else if(count == ')') {
            num --
        }
        i ++;
    }
    
    // 개수 또한 맞아야 하므로 0일 경우에만 true return
    if(num == 0) {
        return true;
    } else {
        return false;
    }
}