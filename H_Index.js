function solution(citations) {
    var answer = citations.length;
    citations.sort((b, a) => (a - b));
    for(i=0; i<citations.length; i++){
        if(i + 1 > citations[i]){
            return i;
        }
    }
    return answer;
}