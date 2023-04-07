/* Assignment 3: Data Manipulation
1. count: return an object which shows the count of each character.
2. groupByKey: return an object which shows the summed-up value of each key.
This time, you may get letters from ‘a’ to ‘z’, try to avoid using ‘if’ or ‘switch’ to
split each letter into different cases (e.g. if(letter == ‘a’)
{...} else if (letter == ‘b’) {...} ), otherwise, your code will be very long.*/

function count(input){
    let ans = {};
    for (let i = 0 ; i < input1.length ; i++){
        if(ans[input[i]]){
            ans[input1[i]] +=1;
        }
        else{
            ans[input[i]] =1;
        }
    }
    return ans
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

