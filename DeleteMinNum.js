function solution(arr) {
    const answer = [...arr].sort((a,b) => (a-b));
    var min = answer[0];
    arr.splice(arr.indexOf(min), 1)
    if(arr == false){
        return [-1];
    }
    return arr;
}