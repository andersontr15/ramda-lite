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

	ramda_lite.all(isEvent, list) --> false

```
- always
- and 
- ap 
- apply 
- both 
- binary
- bind 
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
