function solution(s) {
    var len = s.length;
    if(len % 2 == 0) {
        return (s[len/2-1]+s[len/2]);
    }
    return s[Math.floor(len/2)];
}