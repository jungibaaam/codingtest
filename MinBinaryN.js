function solution(n) {
    var bin = n.toString(2).split('1').length - 1;
    var count = 0;
    do {
        n += 1;
        count = n.toString(2).split('1').length - 1;
    }
    while(bin != count)
    
    
    return n;
}