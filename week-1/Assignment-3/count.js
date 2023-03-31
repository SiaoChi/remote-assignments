function countAandB(input) { // your code here
    let ans = 0;
    for(let i = 0 ; i < input.length ; i++){
        if (input[i] === 'a' || input[i] === 'b'){
            ans +=1;
        }
    }
    return ans
}
function toNumber(input) { // your code here
    let letter_val = {'a':1 , 'b':2 ,'c':3,'d':4,'e':5 };
    let ans = [];
    for (let i = 0 ; i < input.length ; i++){
        ans.push(letter_val[input[i]])
    };
    return ans
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1));
// should print 4 (3 ‘a’ letters and 1 ‘b’ letter)

console.log(toNumber(input1));
// should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));
// should print 0

console.log(toNumber(input2));
// should print [5, 4, 3, 4, 5]