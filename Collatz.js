function solution(num) {
    var count = 0;
    if(num === 1){
        return 0;
    }
    while(num != 1 && count <= 500){
        (num % 2 == 0) ? num = num / 2 : num = num * 3 + 1
        count ++;
    }
    return (num == 1) ? count : -1;
}