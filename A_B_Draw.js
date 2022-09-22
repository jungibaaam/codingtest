function solution(n,a,b)
{
    var answer = 0;
    var count = 0;
    
    for(i = 0; i < n; i ++) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        count ++;
        if(a == b) {
            return count;
        }
    }
    
    return answer;
}