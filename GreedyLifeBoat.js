function solution(people, limit) {
    var answer = 0;
    people.sort(function (a, b) {
                return a - b;
                });
    while(people.length) {
        if(people[0] + people[people.length-1] <= limit) {
            people.shift();
        }
        people.pop(); 
        answer ++;
    }
    return answer;
}