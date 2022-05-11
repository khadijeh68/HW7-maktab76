function returnNumbers(array) {
    let arr = [];
        for ( let i = 0 ; i < array.length ; i++){
            for ( let j = 0 ; j < array[i].length ; j++){
                if (array[i][j] == parseInt(array[i][j])){
                    arr.push(array[i]);
                    break;
                }
            }            
        }   
        return arr;    
}
console.log(returnNumbers(["hello" , "123" , " " , "text1" , "10text"]));
console.log(returnNumbers([]));
