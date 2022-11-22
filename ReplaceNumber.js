function solution(phone_number) {
    var answer = '';
    let len = phone_number.length;
    let num = phone_number.substr(len - 4, len);
    
    answer = '*'.repeat(len - 4) + num;
    return answer;
}