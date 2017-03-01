# ramdaLite 

### Minimalist version of Ramda.js under 10kb

### To include in project: 

```javascript
	var ramdaLite = require('./ramdaLite');
	e.g. --> ramdaLite.always() --> true;
```

### API 
1. [add](#add)
2. [adjust](#adjust)
3. [all](#all)
4. [always](#always)
5. [and](#and)
6. [ap](#ap)
7. [apply](#apply)
8. [both](#both)
9. [binary](#binary)
10. [bind](#bind)
11. [complement](#complement)
12. [compose](#compose)
13. [contains](#contains)
14. [defaultTo](#defaultTo)
15. [divide](#divide)
16. [either](#either)
17. [empty](#empty)
18. [false](#false)
19. [filter](#filter)
20. [flip](#flip)


### add 
add two numbers together
```javascript
	var x = 5;
	var y = 10;
	ramdaLite.add(x,y) --> 15
```

### adjust 
apply a function to a specific index in a list
```javascript
	var numbers = [4,5,6]
	ramdaLite.adjust(5, 1, numbers) --> [4,10,6]
```

### all 
a function that will return true if predicate is true for all values
```javascript
	var numbers = [4,5,6]
	var isEven = function(val) {
		return val % 2 === 0
	}
	ramdaLite.all(isEven, list) --> false
```
### always 
a function that always returns true
```javascript
	ramdaLite.always() --> true 
```
### and 
a function that returns true if both arguments are true
```javascript
	ramdaLite.and(true, false) --> false
```
### ap 
a function that applies multiple methods to a list
```javascript
	var multiply = function(x) {
		return x * 2
	}
	var add = function(x) {
		return x + 2
	}
	ramdaLite.ap(multiply, add, [1,2,3]) -> [4,6,8]
```
### apply 
a function that applies a given context to a function to be invoked
```javascript
	ramdaLite.apply(console.log, 5) -> 5 
```
### both 
a function that returns true if both functions passed to it with the argument are truthy
```javascript
	var isEven = function(value) {
		return value % 2 === 0
	}
	var greaterThanTwenty = function(value) {
		return value > 20
	}
	ramdaLite.both(isEven, greaterThanTwenty, 21) -> false
```
### binary 
a function that returns a function which only utilizes two arguments
```javascript
	var threeArgs = function(a,b,c) {
		return [a,b,c]
	}
	var binaryArgsOnly = ramdaLite.binary(threeArgs);
	binaryArgsOnly(1,2,3) --> [1,2, undefined]
```
### bind 
a function that binds the ```this``` context with the specified function and returns a bound function 
```javascript
	var greet = function(){
		return 'hello ' + this.name
	}
	var obj = {
		name: 'theo'
	}
	var bound = ramdaLite.bind(greet, obj);
	bound() -> 'hello theo'
```
### complement 
a function that returns a function which returns true if argument is identical to first function
```javascript
	var complement = ramdaLite.complement(null);
	complement(null) -> true
	complement(undefined) -> false 
```
### compose 
a function that can take an infinite amount of functions and call them sequentially on a value
```javascript
	var addTwo = function(v) {
		return v + 2 
	}
	var multiplyByTwo = function(v) {
		return v * 2
	}
	var composition = ramdaLite.compose(addTwo, multiplyByTwo);
	composition(2) --> 8
```
### contains 
a function that returns true if value is in the supplied list
```javascript
	var numbers = [1,2,3,4];
	var hasFour = ramdaLite.contains(4, numbers);
	hasFour --> true 
```
### defaultTo 

### divide 
a function that divides two numbers
```javascript
	var x = 10;
	var y = 5;
	var quotient = ramdaLite.divide(x,y);
	quotient --> 2
```

### either 
a function that returns true if value is truthy for one of two predicate functions 
```javascript
	var value = 2;
	var isOdd = function(v) {
		return v % 3 === 0
	}
	var isEven = function(v) {
		return v % 2 === 0
	}
	var either = ramdaLite.either(isEven, isOdd, value);
	either --> true 
```

### empty 
a function that returns the JavaScript class representation of the supplied type as an empty type
var numbers = [1,2,3,4];
var value = ramdaLite.empty(numbers);
value --> []

### false 

### filter 

### flip 

### gt 

### gte

### identity

### ifElse 

### inc 

### is 

### isEmpty

### it 

### juxt 

### keys 

### length 

### last 

### lte 

### Maybe 

### map 

### max 

### memoize 

### min 

### multiply 

### negate 

### none 

### nth

### nthArg

### of 

### or 

### pair 

### prepend 

### product 

### range 

### reduce 

### reject 

### reverse 

### subtract 

### tail 

### take 

### takeLast 

### times 

### toUpper

### toLower 

### toPairs

### tryCatch

### true 

### unique 

### values 

### without 

### zip 
