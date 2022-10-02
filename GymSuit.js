function solution(n, lost, reserve) {
    var count = 0;
    reserve.sort(function(a, b) {
        return a - b;
    });
    lost.sort(function(a, b) {
        return a - b;
    });
    for(i = 0; i < reserve.length; i ++) {
        if(lost.includes(reserve[i])) {
            lost.splice(lost.indexOf(reserve[i]), 1)
            reserve.splice(i, 1);
            i -- ;
            continue
        }
    }
    var answer = n - lost.length;
    for(i = 0; i < reserve.length; i ++) {
        if(lost.includes(reserve[i] - 1)) {
            lost.splice(lost.indexOf(reserve[i] - 1), 1);
            reserve.splice(i, 1)
            count ++ ;
            i -- ;
            continue;
        } else if(lost.includes(reserve[i] + 1)) {
            lost.splice(lost.indexOf(reserve[i] + 1), 1);
            reserve.splice(i, 1)
            count ++ ;
            i -- ;
            continue;
        }
    }
    answer += count;
    return answer;
}