function solution(n)
{
    var answer = 0;
    
    var word;
    var len;

    word = n.toString();
    len = word.length;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    while(len > 0) {
        answer += parseInt(word.substring(len, len-1));
        len -- ;
    }
    

    return answer;
}