//var date = new Date();
//document.body.innerHTML= "<h2>Today is "+date+"</h2>";
var l = 0;
if(l == 0)
{
  console.log("Got l as empty");
}
else {
  l = 0;
}
//Strict equality
var num = 0;
var obj = new String('0');
var str = '0';

console.log(num == str); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null == undefined); // true
// both false, except in rare cases
console.log(obj == null);
console.log(obj == undefined);
// Array
var pens;
pens = ["red", "blue", "green"];
var mixedBag = ["red",566, "kale veggies", 45];
console.log(mixedBag, pens.length);
//methods :
// reverse / shift / splice(position, numberofobjstoremove) / pop / shift / unshift / push
//slice : returns new copy
//indexOf  : return index
// join : join together into single string and we can add seperator as passing arg
var jj = pens.join("|");
console.log(jj);
// functions
function multiply(a,b)
{
  var res = a*b;
  return res;
}
var r = multiply(1.23,4.56);
console.log("multiplication : "+r);
//immediate invoked function expression
(function() {
  var res = 12/76;
  console.log("t 12 div 0.76 = "+ res);
}());

// returns the factorial of 10.
alert((function(n) {
  return !(n > 1)
    ? 1
    : arguments.callee(n - 1) * n;
})(10));


//objects
//Constructor
function Course(title,book,maxmarks)
{
  this.title = title;
  this.book = book;
  this["mm"] = maxmarks;
}
var course01 = new Course("Maths","Essential Maths", 100);
console.log(course01);

var course02 = new Course("SStudies","Essential SStudies SStudies", 230);
console.log(course02);

// Nested function  : Closure
