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

function curriedSum(numArgs){
    
}
