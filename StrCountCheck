function solution(s){
    var answer = true;
    var len = s.length;
    var p_cnt = 0
    var y_cnt = 0
    for(i = 0; i < len; i ++) {
        console.log(s[i])
        if(['p','P'].includes(s[i])){
            p_cnt += 1;    
        }else if(['y','Y'].includes(s[i])){
            y_cnt += 1;
        }
    }
    
    if (p_cnt == y_cnt){
        return true;
    }
    return false;
}