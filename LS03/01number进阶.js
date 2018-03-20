var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4

//很重要
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true

//向下取整
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4

//向上取整
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3

//四舍五入
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4