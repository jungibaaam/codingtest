function solution(progresses, speeds) {
    var answer = [];
    let times = 0;
    let ans = -1;
    for(i=0; i<progresses.length; i++){
        const complete = 100;
        if(progresses[i] + (speeds[i] * times) >= complete){
            answer[ans] += 1;
            continue;
        }
        times = 0;
        while(progresses[i] <= complete){
            times += 1;
            progresses[i] += speeds[i];
        }
        answer.push(1);
        ans += 1;
    }
    return answer;
}