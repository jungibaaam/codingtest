function solution(n) {
    var watermellon = '수박'.repeat(n/2);
    var answer = (n % 2 == 1) ? watermellon += "수" : watermellon; 
    return answer;
}