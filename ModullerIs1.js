function solution(n) {
    var answer = 0;
    var even;
    var result;
    
    even = n % 2;
    
    if(n == 1) {
        return 1;
    }else if(even == 1) {
        return 2;
    }else {
        for(i = 3; i < n; i += 2) {
            result = n % i;
            if(result == 1) {
                return i;
            }
        }
    }
    return answer;
}