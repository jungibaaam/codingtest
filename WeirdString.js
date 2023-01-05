function solution(s) {
    let arr = s.split(' ');
    let word ='';
    
    let answer = arr.map(a => {
        word = a.split('');
        return word.map((w, j) => {
            if(j%2){
                return w.toLowerCase();
            }else{
                return w.toUpperCase();
            }
        }).join('');
    }).join(' ');
  
  return answer;
}