function binarySearchPosition(numbers, target) {
    let mid = Math.floor(numbers.length / 2);
    let l = 0;
    let r = (numbers.length)-1;
    while (l<=r){
    if (target === numbers[mid]){
        return mid
    }else if(target < numbers[mid]){
        r = mid-1;
        mid = Math.floor((l+r)/2)
    }else{
        l = mid+1;
        mid = Math.floor((l+r)/2);
        }
    }
    return -1
}



console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 5)); // should print 2
console.log(binarySearchPosition([1, 2, 5, 6, 7], -1)); // should print -1