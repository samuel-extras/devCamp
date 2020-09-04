const addUpToNumber = (array, number) => {
    let addUpArray = [];
    let size = array.length
    let newArray = []
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < number-1){
            newArray.push(array[i])
        }
        
    }

    console.log(newArray);
}
addUpToNumber([1,1,1,2,3,4,5,6,7,8], 6)
