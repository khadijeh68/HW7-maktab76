function recurIndex(str){
    let obj = {};
    let arr = [];
    let array = [...str];
    array.map((item , index) => {
        obj[item] = item;
        console.log(item);
    for (let i of item) {
        if (item[i] === item[i+1]){
          arr.push(item);
        }
    }   
        return arr;
        
    });
    console.log(obj);   
}
recurIndex("AREDCBSDERD");


//recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}