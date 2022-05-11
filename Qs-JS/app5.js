//filter method
// function filterMethod(array){
//     let arr = [];
//     for ( let i = 0 ; i < array.length ; i++){
//         if ( array[i].length > 5 ){
//             arr.push(array[i]);
//         }
//     }
//     return arr;
// }
// let newArray = ["hello" , "world" , "javaScript" , "123456"]
// console.log(filterMethod(newArray));

//find method
// function findMethod(array){
//     let arr = [];
//     for ( let i = 0 ; i < array.length ; i++){
//         if ( array[i].length > 5 ){
//             arr.push(array[i]);
//             break;
//         }
//     }
//     return arr;
// }
// let newArray = ["hello" , "world" , "Hello World" , "123456" , "javaScript"]
// console.log(findMethod(newArray));

//slice method
// function sliceMethod(str , i , j) {
//     for ( let k = i ; k < j ; k++ ){
//            str[k] += str[i];
//            console.log(str[k]);   
//     }
// } 
// sliceMethod("i am leraning javaScript" , 5 , 10);

//splice method
// function spliceMethod (array , index , number , arr){
//     let newArray = [];   
//     for ( let i = index ; i < array.length ; i++){
//         if((i <= index + number && i >=  index) || (i <= index && i >=  index + number)){
//             newArray = array[i].pop;
//             array[i] = arr;  
//             break;       
//         }
//     }  
//     console.log(array); 
// }
// spliceMethod (["iam"  , "leraning"  , "java" , "Script"] , 2 , 1 , "hello");

//some method
function filterMethod(array){
    let arr = [];
    let lengthBiggerThan5 = array[i].length;
    for ( let i = 0 ; i < array.length ; i++){
        if ( lengthBiggerThan5 ){
           return true;
    } else {
        return false;
    }
  
}
}
let newArray = ["hello" , "world" , "javaScript" , "123456"]
console.log(filterMethod(newArray));