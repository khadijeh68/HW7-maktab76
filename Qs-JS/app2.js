function recurIndex(str){
    let arr = [];
    let arr2 = [];
    let obj = {};
    let str2 = str.split('');
    console.log(str2);
    for (let i=0; i<str2.length; i++) {
        for (let j=i+1; j<str2.length; j++) {
            if (str[i] === str[j]) {
                arr.push(str[i]);
                //arr2.push(i);
            }
        }

    }
    console.log(arr);
    //console.log(arr2);
    // for (let i=0; i<arr.length; i++) { 
    //     if (arr2.indexOf(arr[i]) == -1) {
    //         arr2.push(arr[i]);
    //     }
   
}   
recurIndex("AREDCBSDERD");

//recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
