const counterModule = (function() {
    let count = 0; // private

    return {
        inc: () => ++count,
        dec: () => --count,
        reset: () => (count = 0),
        get: () => count
    };
})();

console.log(counterModule.inc()); // 1
console.log(counterModule.inc()); // 2
console.log(counterModule.get()); // 2


const mathModule=(function(){
return {
  add:(x,y)=>x+y,
  subtract:(x,y)=>x-y,
  multiply:(x,y)=>x*y,
  divide:(x,y)=>x/y
};
})();
let a=Number(prompt("Enter first number: "));
let b=Number(prompt("Enter second number: "));
console.log(mathModule.add(a,b));
console.log(mathModule.subtract(a,b));
console.log(mathModule.divide(a,b))
console.log(mathModule.multiply(a,b))

