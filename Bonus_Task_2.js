const consonantReplacer =(string)=>{
    let replace = ""
    let consonant = "bcdfghjklmnpqrstvwxyz";
    let vowel = ["a","e","i","o","u"]
    let consonants = consonant.split()
    for (let i = 0; i < string.length; i++) {
        if (vowel.includes(string[i])){
           return string[i]
            
        }
        
        for (let j = 0; j < consonants.length; j++) {
            if(consonants[j].includes(string[i])){
              return  string[i] === consonants[j+1]

            }
            
        }
        return
    }

}
consonantReplacer("ajibola")