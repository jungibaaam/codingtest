// for문 사용
function solution(s)
{
    var answer = 1;
    var word = s.split("");
    for(var i = 0; i < word.length; i ++) {
        if(word[i] == word[i + 1]) {
            word.splice(i, 2);
            i = -1;
        } else if(i == word.length-1) {
            return answer = 0;
        }
    }
    return answer;
}
// // while문 사용
// function solution(s)
// {
//     var answer = 1;
//     var word = s.split("");
//     var count = 0;
//     while(word.length != 0) {
//         if(word[count] == word[count + 1]) {
//             word.splice(count, 2);
//             count += -2;
//         } else if (count == word.length - 1) {
//             return answer = 0;
//         }
//         count ++ ;
//     }
//     return answer;
// }