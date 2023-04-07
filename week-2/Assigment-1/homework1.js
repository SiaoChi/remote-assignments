/* Assignment 1: Function and Array
1. max: find the max value of an array of numbers
2. findPosition: find the first position of the target number inside an array of numbers.
The position should be counted starting from 0, if you can't find the target, please return -1 */

function max(numbers) {
    let _max = 0;
    for (let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] > _max){
            _max = numbers[i]
        }
    }
    return _max
}


function findPosition(numbers, target) {
    for (let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] === target){
            return i
        }
    }
    return -1
}

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1,]));// should print 5

console.log(findPosition([5,2,7,1,6],5)) //should print 0
console.log(findPosition([5,2,7,1,6],7)) //should print 2
console.log(findPosition([5,2,7,1,6],8)) //should print -1