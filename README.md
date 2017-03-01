# Minimalist version of Ramda.js under 10kb 

# API 

### To include in project: 

```javascript
	var ramda_lite = require('./index');
	e.g.
	ramda_lite.always() --> true 
```

### add ( add two numbers together )
```javascript
	var x = 5;
	var y = 10;
	ramda_lite.add(x,y) --> 15
```

### adjust (apply a function to a specific index in a list)
```javascript
	var numbers = [4,5,6]
	ramda_lite.adjust(5, 1, numbers) --> [4,10,6]
```

### all (a function that will return true if predicate is true for all values)
```javascript
	var numbers = [4,5,6]
	var isEven = function(val) {
		return val % 2 === 0
	}
	ramda_lite.all(isEven, list) --> false
```
### always (a function that always returns true)
```javascript
	ramda_lite.always() --> true 
```
### and (a function that returns true if both arguments are true)
```javascript
	ramda_lite.and(true, false) --> false
```
### ap (a function that applies multiple methods to a list)
```javascript
	var multiply = function(x) {
		return x * 2
	}
	var add = function(x) {
		return x + 2
	}
	ramda_lite.ap(multiply, add, [1,2,3]) -> [4,6,8]
```
### apply (a function that applies a given context to a function to be invoked)
```javascript
	ramda_lite.apply(console.log, 5) -> 5 
```
### both (a function that returns true if both functions passed to it with the argument are truthy)
```javascript
	var isEven = function(value) {
		return value % 2 === 0
	}
	var greaterThanTwenty = function(value) {
		return value > 20
	}
	ramda_lite.both(isEven, greaterThanTwenty, 21) -> false
```
### binary (a function that returns a function which only utilizes two arguments)
```javascript
	var threeArgs = function(a,b,c) {
		return [a,b,c]
	}
	var binaryArgsOnly = ramda_lite.binary(threeArgs);
	binaryArgsOnly(1,2,3) --> [1,2, undefined]
```
### bind 



### complement (a function that returns a function which returns true if argument is identical to first function)
```javascript
	var complement = ramda_lite.complemente(null);
	complement(null) -> true
	complement(undefined) -> false 
```
### compose (a function that can take an infinite amount of functions and call them sequentially on a value)
```javascript
	var addTwo = function(v) {
		return v + 2 
	}
	var multiplyByTwo = function(v) {
		return v * 2
	}
	var composition = ramda_lite.compose(addTwo, multiplyByTwo);
	composition(2) --> 8
```
### contains (a function that returns true if value is in the supplied list)
```javascript
	var numbers = [1,2,3,4];
	var hasFour = ramda_lite.contains(4, numbers);
	hasFour --> true 
```
### defaultTo 

### divide 

### either 

### empty 

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
