function solution(brown, yellow) {
    var answer = [];
    var size = brown + yellow;
    var width;
    var height;
    for(i=3; i<size; i++){
        width = size / i;
        height = i;
        if(width < height){
            continue;
        }
        if((width - 2) * (height - 2) === yellow) {
        answer[0] = width;
        answer[1] = height;
        }
    }
    return answer;
}