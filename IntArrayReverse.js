function solution(n) {
    var answer = [];
    var word;
    var len;
    
    word = n.toString();
    len = word.length;
    
    for(len = len - 1; len > -1; len --) {
        
        answer.push(parseInt(word[len]));
    }
    console.log(answer);
    
    return answer;
}