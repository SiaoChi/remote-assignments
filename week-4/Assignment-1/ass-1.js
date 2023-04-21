function delayedResult(n1, n2, delayTime, callback) {
    const result = Number(n1) + Number(n2);
    setTimeout(callback ,delayTime, result)
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
});

// 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) { console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds


// using promise
function delayedResultPromise(n1, n2, delayTime) {
    const result = Number(n1) + Number(n2);
    return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(result);
    }, delayTime);
  });}

delayedResultPromise(4, 5, 4000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

//using async/await
async function main() {
// your code here, you should call delayedResultPromise here and
// get the result using async/await.

    const result = await delayedResultPromise(10,5,6000);
    console.log(result)
}
main(); // result will be shown in the console after <delayTime> seconds