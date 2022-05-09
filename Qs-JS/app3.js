function getLength(array) {
    array = array.flat(Infinity);
    return array.length;
}
console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));


//([1, [2, 3]]) ➞ 3
//([1, [2, [3, 4]]]) ➞ 4
//([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
