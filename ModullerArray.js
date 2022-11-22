function solution(arr, divisor) {
    const result = arr.filter(number => number % divisor == 0);
    return (result == false) ? [-1] : result.sort((a,b) => a-b);
}