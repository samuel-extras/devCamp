const maximumCharacter = (string) =>{
    let maxStr = 0; // variable to store the number of appearances of the maximum character 
    let maxChars =[]; //array to store to the maximum character(s) 
    const allChars = new Array(127).fill(0) // initialize a fixed sized array with ASCII and fill it with zeros
    // iterate over all the characters and add the count to allChars 
    for (let i = 0; i < string.length; i++) {
        const str = string.charCodeAt(i);
        allChars[str]++; // if character found in the string it got incremented at the 0 fill of allchar
        if(allChars[str]>maxStr){ // check if a character occur most
            maxChars = [string.charAt(i)]; // if condition above is true, make maxChar array value to be that chararcter
            maxStr = allChars[str];
        }else if(allChars[str]===maxStr) maxChars.push(string.charAt(i)); // this check if more than one character occur most
        
    }
   return maxChars.length < 2 ? maxChars[0] : maxChars // this condition return just the string if 1 or array of the string if more than 1 
}

