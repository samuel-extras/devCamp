const consonantReplacer = (string) => {
  let replace = "";
  const consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
  const vowel = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] ==="a" || string[i] ==="e" || string[i] ==="i" || string[i] ==="o" || string[i] ==="u" ) {
        console.log(string[i]);
    } else if (consonant.includes(string[i])){
        for (let j = 0; j < consonant.length; j++) {
            if(string.includes(consonant[j])){
                console.log(consonant[j +1]);
            }
            
        }
    }
    
  }
};
consonantReplacer("ajibola");
