function solution(s) {
    var answer = '';
    var word;
    var pos = 0;
    var change;
    word = s.toLowerCase();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    
    String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    }
    
    while(true) {
        var foundpos = word.indexOf(' ', pos);
        if(foundpos == -1) break;
        pos = foundpos + 1;
        change = word.charAt(pos).toUpperCase()
        word = word.replaceAt(pos, change);
    }
    
    return word;
}