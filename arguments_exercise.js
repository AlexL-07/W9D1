function sum(...args){
    let sum = 0;
    args.forEach((el) => {
        sum += el;
    })
    return sum;
}

// console.log(sum(1, 2, 3, 4, 5))

Function.prototype.myBind = function (context, ...bindArgs){
    let that = this;
    return function (...callArgs){
        return that.apply(context, bindArgs.concat(callArgs));
    }
}

// function curriedSum(numArgs){
//     let numbers = [];
//     const _curriedSum = (...arg) => {
//         numbers.push(arg);
//         numbers.reduce((acc, el) => acc + el)
//     }
//     return _curriedSum
// }

Function.prototype.curry = function (numArgs){
    let nums = [];
    let func = this;
    return function _myCurry(ele){
        nums.push(ele);
        if(nums.length < numArgs){
            return _myCurry;
        }else{
            return func(...nums);
        }
    }
}