# ramdaLite 

### Minimalist version of Ramda.js under 10kb

### To include in project: 

```javascript
	var ramdaLite = require('./ramdaLite');
	e.g. --> ramdaLite.always() --> true;
```

### API 
1. [addTwo](#add-two)
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


### add-two 
add two numbers together
```javascript
	var x = 5;
	var y = 10;
	ramdaLite.addTwo(x,y) --> 15
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
```javascript
var numbers = [1,2,3,4];
var value = ramdaLite.empty(numbers);
value --> []
```

### false 
a function that always returns false 
```javascript
	var f = ramdaLite.false();
	f --> false; 
```

### filter 
a function that filters a list based of the the predicate function 
```javascript 
	var numbers = [1,2,3,4];
	var filtered = ramdaLite.filter(numbers, function(v) {
		return v % 2 === 0
	});
	filtered --> [2,4]
```

### flip 
a function that reverses argument order of functions 
```javascript
	var multiply = function(x) {
		return x * 2
	}
	var add = function(x) {
		return x + 2
	}
	var flipped = ramdaLite.flipped(multiply, add);
	flipped(4) --> add --> multiply --> 12 
```

### gt 
a function that returns true if the first argument is greater than the second argument 
```javascript 
	var x = 5;
	var y = 10;
	var result = ramdaLite.gt(x,y);
	result --> false;
```

### gte
a function that returns true if the first argument is greater than or equal to the second argument 
```javascript 
	var x = 10;
	var y = 10;
	var result = ramdaLite.gte(x,y);
	result --> true 
```

### identity
a function that takes in a value and return the value as its self. 
```javascript 
	var value = 10;
	var result = ramdaLite.identity(10);
	result --> 10;
```

### ifElse 


### inc 
a function that will take in a value and increment it by 1 
```javascript 
  var result = ramdaLite.inc(5);
  result --> 6 
```

### is 
a function that will return true if first argument is an instance of the second argumet (its constructor)
```javascript 
	var obj = {
		name: 'theo'
	};
	var result = ramdaLite.is(obj, {}) --> true 
	var falsy = ramdaLite.is(obj, []) --> false 
```

### isEmpty
a function that will return true if the value is empty 
```javascript 
	var value = [1,2,3];
	var value2 = [];
	ramdaLite.isEmpty(value) -> false;
	ramdaLite.isEmpty(value2) -> true;
```
### juxt 
a function which is invokes multiple functions on a list of values 
```javascript 
	var double = function(x) {
		return x * x 
	}
	var addThree  = function(x) {
		return x + 3
	}
	var list = [1,2,3,4];
	var result = ramdaLite.juxt(double,triple,list);
	result --> [4,7,12,19]
```

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
