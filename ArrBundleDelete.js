function solution(s)
{
    var answer = 0;
    var word = s.split("");
    for(var i = 0; i < word.length; i ++) {
        if(word[i] == word[i + 1]) {
            word.splice(i, 2);
            i = 0;
        } else if(word.length == 0) {
            answer = 1;
            break;
        }
    }
    return answer;
}