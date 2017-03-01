# Minimalist version of Ramda 

# API 

```javascript
	var ramda_lite = require('./index');
	e.g.
	ramda_lite.always() --> true 
```

- add
```javascript
	var x = 5;
	var y = 10;
	ramda_lite.add(x,y) --> 15
```

- adjust 
```javascript
	var numbers = [4,5,6]
	ramda_lite.adjust(5, 1, numbers) --> [4,10,6]
```

- all
```javascript
	var numbers = [4,5,6]
	var isEven = function(val) {
		return val % 2 === 0
	}
	ramda_lite.all(isEven, list) --> false
```
- always
```javascript
	ramda_lite.always() --> true 
```
- and 
```javascript
	ramda_lite.and(true, false) --> false
```
- ap 
```javascript
	var multiply = function(x) {
		return x * 2
	}
	var add = function(x) {
		return x + 2
	}
	ramda_lite.ap(multiply, add, [1,2,3]) -> [4,6,8]
```
- apply 
```javascript
	ramda_lite.apply(console.log, 5) -> 5 
```
- both 
```javascript
	var isEven = function(value) {
		return value % 2 === 0
	}
	var greaterThanTwenty = function(value) {
		return value > 20
	}
	ramda_lite.both(isEven, greaterThanTwenty, 21) -> false
```
- binary
```javascript
	var threeArgs = function(a,b,c) {
		return [a,b,c]
	}
	var binaryArgsOnly = ramda_lite.binary(threeArgs);
	binaryArgsOnly(1,2,3) --> [1,2, undefined]
```
- bind 
```javascript
	var obj = {
		name: 'theo'
	}
	var greet = function(name) {
		return name;
	}
	var bound = ramda_lite.bind()
```
- complement 
- compose 
- contains 
- defaultTo 
- divide 
- either 
- empty 
- false 
- filter 
- flip 
- forEach
- gt 
- gte
- identity
- ifElse 
- inc 
- is 
- isEmpty
- it 
- juxt 
- keys 
- length 
- last 
- lte 
- Maybe 
- map 
- max 
- memoize 
- min 
- multiply 
- negate 
- none 
- nth
- nthArg
- of 
- or 
- pair 
- prepend 
- product 
- range 
- reduce 
- reject 
- reverse 
- subtract 
- tail 
- take 
- takeLast 
- times 
- toUpper
- toLower 
- toPairs
- tryCatch
- true 
- unique 
- values 
- without 
- zip 
