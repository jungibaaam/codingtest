function solution(n, lost, reserve) {
    var answer = 0;
    var count = 0;
    for(i = 0; i < reserve.length; i ++) {
        console.log(reserve[i])
        if(lost.includes(reserve[i])) {
            console.log("lost and reserve is same")
            continue;
        } else if(lost.includes(reserve[i] - 1)) {
            console.log("reserve - 1 is lost and " + reserve)
            count ++;
            continue;
        } else if(lost.includes(reserve[i] + 1)) {
            console.log("reserve + 1 is lost and " + reserve)
            count ++;
            continue;
        }
    }
    answer = n - (lost.length - count);
    return answer;
}