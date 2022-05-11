//filter method
function filterMethod(array){
    let arr = [];
    for ( let i = 0 ; i < array.length ; i++){
        if ( array[i].length > 5 ){
            arr.push(array[i]);
        }
    }
    return arr;
}
let newArray = ["hello" , "world" , "javaScript" , "123456"]
console.log(filterMethod(newArray));

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
//         if(i < index + number){
//             newArray = array[i].pop;
//             array[i] = arr;                 
//         }     
//     }  
//     return array;
// }
// console.log(spliceMethod (["text"  , "world"  , "java" , "Script"] , 0 , 2 , "hello"));

//some method
// function filterMethod(array){
//     let trueFalse = false;
//     for ( let i = 0 ; i < array.length ; i++){
//         if ( array[i].length > 8 ){
//             trueFalse = true;
//         } 
//     }
//     return trueFalse;
// }
// let newArray = ["hello" , "world" , "javaScript" , "123456"]
// console.log(filterMethod(newArray));
