
function twoSum(nums, target) {
    let map = {};
    for (let i = 0 ; i < nums.length ; i++){
        let i_num = nums[i];
        let wantFind = target - i_num;

        if (wantFind in map){
            return [i,map[wantFind]]
        }else{
            map[i_num]= i;
        }
    }
}
/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:[0, 1]
Because:nums[0]+nums[1] is 9
*/

console.log(twoSum([2, 7, 11, 15], 9)) //return [0,1]
console.log(twoSum([2, 7, 11, 15], 18)) //return [1,2]