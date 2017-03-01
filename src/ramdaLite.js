(function() {
  /* 
    Theodore Anderson 02/28/2017
    Ramda Lite
  */
 'use strict';
  var r = {};
  
  // add 
  r.addTwo = function(a,b)  {
   return a + b
  }

  //adjust 
  r.adjust = function(fn, pos, list) {
   var result = [];
   for(var i = 0; i < list.length; i++) {
    if(i === pos) {
     result.push(fn(list[i]))
    }
    else {
     result.push(list[i])
    }
   }
   return result;
  }
  
  // all
  r.all = function(list, predicate) {
    for(var i = 0; i < list.length; i++){
      if(predicate(list[i]) === false) {
        return false;
      }
    }
    return true;
  }

  // always 
  r.always = function(val) {
    return val;
  }

  // and 
  r.and = function(a,b) {
    return a === true && b === true
  }

  // any 
  r.any = function(list, predicate) {
    for(var i = 0; i < list.length; i++){
      if(predicate[list[i]] === true) {
        return true;
      }
    }
    return false;
  }

  // ap (applies a list of functions to a list of values)
  r.ap = function() {
    var args = Array.from(arguments);
    var methods = args.slice(0, args.length - 1);
    var array = args[args.length - 1];
    for(var i = 0; i < methods.length; i++) {
      for(var j = 0; j < array.length; j++){
        array[j] = methods[i](array[j])
      }
    }
    return array
  } 

  // append 
  r.append = function(list, val) {
    return list.concat(val)
  }

  // apply 
  r.apply = function(fn, list) {
    return fn.apply(null, list)
  }

  //both 
  r.both = function(fn1, fn2) {
   return function(val) {
    return fn1(val) && fn2(val)
   }
  }

  //binary 
  r.binary = function(fn) {
   return function() {
    return fn(arguments[0], arguments[1])
   }
  }

  //bind 
  r.bind = function(fn, context) {
   return function() {
    return fn.apply(context, arguments)
   }
  }

  //complement 
  r.complement = function() {
   return function(val) {
    return val === null;
   }
  }

  //compose 
  r.compose = function() {
   var args = Array.from(arguments);
   var result;
   var functions = args.slice(0, args.length - 1);
   return function(val) {
     var result = val;
     for(var i = 0; i < functions.length; i++) {
      result += functions[i](result)
    }
    return result;
   }
  }

  // contains 
  r.contains = function(val, list) {
    return list.indexOf(val) > -1
  }

  // default to
  r.defaultTo = function(val) {
    return function() {
      if(arguments[0] === undefined || arguments[0] === null) {
        return val;
      }
      else {
        return arguments[0]
      }
    }
  }  

  // divide 
  r.divide = function(a,b) {
    if(a === 0) {
      throw new Error('Divide by zero exception')
    }
    else {
      return a / b
    }
  }

  // drop 
  r.drop = function(index, list) {
    return list.splice(index, 1)
  }

  // either 
  r.either = function(fn1, fn2) {
    return function(val) {
      if(fn1(val) === true || fn2(val) === true) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  //empty 
  r.empty = function(val) {
    var representation = Object.prototype.toString.call(val);
    return representation[0] + representation[representation.length - 1]
  }

  //false
  r.false = function() {
    return false;
  }

  //filter 
  r.filter = function(list, fn) {
   var result = [];
   for(var i = 0; i < list.length; i++) {
    if(fn(list[i]) === true) {
     result.push(list[i])
    }
   }
   return result;
  }

  //flip arguments order 
  r.flip = function() {
    var order = Array.from(arguments).reverse();
    return function(args) {
      for(var i = 0; i < order.length; i++) {
       for(var j = 0; j < args.length; j++){
         args[j] = order[i](args[j])
       }
      }
      return args
    }
  }

  //for each
  r.forEach = function(fn, list) {
    for(var i = 0; i < list.length; i++){
      fn(list[i])
    }
  }

  //greater than 
  r.gt = function(a,b) {
    return a > b
  }

  //greater than or equal to 
  r.gte = function(a,b) {
    return a >= b 
  }

  //has 
  r.has = function(obj, prop) {
   return obj.hasOwnProperty(prop)
  }

  //hasIn 
  r.hasIn = function(obj, prop) {
   return prop in obj 
  }

  //identity
  r.identity = function(val) {
    return val;
  }

  //ifElse
  r.ifElse = function(predicate, ifCondition, elseCondition) {
   return function(val) {
    if(predicate === true) {
     return ifCondition(val)
    }
    else {
     return elseCondition(val)
    }
   }
  } 

  //inc 
  r.inc = function(val) {
   return val + 1
  }

  //init 
  r.init = function(val) {
   return val.slice(1)
  }

  //is 
  r.is = function(val, ctor) {
   return val.constructor === ctor 
  }

  //isEmpty
  r.isEmpty = function(val) {
   if(val === undefined || val === null) {
    return false;
   }
   else {
    return val.length === 0
   }
  }

  //it 
  r.it = function(a,b) {
   return a < b
  }

  //juxt 
  r.juxt = function() {
   var result = [];
   var fns = Array.from(arguments);
   return function(list) {
    for(var i = 0; i < fns.length; i++) {
     for(var j = 0; j < list.length; j++) {
      result.push(fns[i](list[j]))
     }
    }
    return result;
   }
  }

  //keys 
  r.keys = function(object) {
    var result = [];
    for(var key in obj) {
      result.push(key)
    }
    return result;
  }

  //length 
  r.length = function(list) {
   return list.length 
  }

  //last 
  r.last = function(list) {
    return list[list.length - 1];
  }

  //lte 
  r.lte = function(val1, val2) {
   return val1 <= val2 
  }
  
  //maybe 
  r.Maybe = function(val) {	
    var container = [];
	if(val === undefined || val === null || val instanceof Error){
		return [null]
    }
	else {
		container.push(val);
		return container 
    }
}

  //map 
  r.map = function(fn, list) {
    var result = [];
    for(var i = 0; i < list.length; i++){
      result.push(fn(list[i]))
    }
    return result;
  }

  //max 
  r.max = function(list) {
   var max = list[0];
   for(var i = 0; i < list.length; i++) {
    if(list[i] > max) {
     max = list[i]
    }
   }
   return max;
  }

  //memoize 
  r.memoize = function(fn) {
    var cache = {};
    return function(args) {
      if(cache.hasOwnProperty(fn)) {
        return cache[fn](args)
      }
      else {
        cache[fn] = fn;
        return cache[fn](args);
      }
    }
  }

  //min 
  r.min = function(list) {
   var min = list[0];
   for(var i = 0; i < list.length; i++) {
    if(list[i] < min) {
     min = list[i]
    }
   }
   return min;
  }

  //multiply 
  r.multiply = function(a,b) {
    return a * b
  }

  //negate 
  r.negate = function(v) {
   return -(v)
  }

  //none 
  r.none = function(fn, list) {
   for(var i = 0; i < list.length; i++) {
    if(fn(list[i]) === true) {
     return false;
    }
   }
   return true;
  }

  //not 
  r.not = function(val) {
   return !!Boolean(val)
  }

  //nth 
  r.nth = function(pos, list) {
   if(pos > list.length || pos < 0) {
    return false;
   }
   else {
    return list[pos]
   }
  }

  //nthArg 
  r.nthArg = function(pos) {
   return function() {
    return arguments[pos]
   }
  }

  //of 
  r.of = function(val) {
    return [val]
  }

  //or 
  r.or = function(a,b) {
    return a === true || b === true
  }

  //pair 
  r.pair = function(fn1, fn2) {
    return [
      fn1,
      fn2
    ]
  }

  //prepend 
  r.prepend = function(list, val) {
    return list.unshift(val)
  }

  //product 
  r.product = function(list) {
    var result;
    for(var i = 0; i < list.length; i++){
      result *= list[i]
    }
    return result;
  }

  //range 
  r.range = function(min, max) {
    var result = [];
    for(var i = min; i < max; i++) {
      result.push(i)
    }
    return result;
  }

  //reduce 
  r.reduce = function(fn, initialValue, list) {
   var result = initialValue;
   for(var i = 0; i < list.length; i++) {
    result += fn(list[i])
   }
   return result;
  }

  //reject 
  r.reject = function(fn, list) {
   var result = [];
   for(var i = 0; i < list.length; i++) {
    if(fn(list[i]) === false) {
     result.push(list[i])
    }
   }
   return result;
  }

  //reverse 
  r.reverse = function(list) {
   if(list instanceof Array) {
    return list.reverse()
   }
   else {
    return list.toString().split('').reverse().join('')
   }
  }

  //subtract 
  r.subtract = function(a,b) {
   return a - b 
  }

  //sum
  r.sum = function(a,b) {
   return a + b
  }

  //tail 
  r.tail = function(list) {
    return list.slice(1)
  }

  //take 
  r.take = function(val, list) {
    return list.slice(0, val)
  }

  //takeLast 
  r.takeLast = function(pos, list) {
   return list.slice(pos, list.length - 1)
  }

  //tap 
  r.tap = function(fn, obj) {
   fn(obj);
   return obj;
  }

  //times 
  r.times = function(fn, n) {
   for(var i = 0; i < n; i++) {
    fn(i)
   }
  }

  //toUpper 
  r.toUpper = function(val) {
   return val.toUpperCase()
  }

  //toLower 
  r.toLower = function(val) {
   return val.toLowerCase()
  }

  //toPairs
  r.toPairs = function(obj) {
   var result = [];
   for(var key in obj) {
    result.push([key, obj[key]])
   }
   return result;
  }

  //tryCatch
  r.tryCatch = function(fn1, fn2) {
    return function(val) {
      if(fn1(val) === false) {
        return fn2(val)
      }
      else {
        return fn1(val)
      }
    }
  }

  //true 
  r.true = function() {
   return true;
  }

  //type 
  r.type = function(val) {
    return Object.prototype.toString.call(val)
  }

  //unique 
  r.unique = function(list) {
    var result = [];
    for(var i = 0; i < list.length; i++){
      if(result.indexOf(list[i]) === -1) {
        result.push(list[i])
      }
    }
    return result;
  }

  //values 
  r.values = function(obj) {
    var values = [];
    for(var key in obj) {
      values.push(obj[key])
    }
    return values;
  }

  //without 
  r.without = function(list1, list2) {
    var result = [];
    for(var i = 0; i < list2.length; i++){
      if(list1.indexOf(list2[i]) === -1) {
        result.push(list2[i])
      }
    }
    return result;
  }

  //zip 
  r.zip = function(list1, list2) {
    var result = [];
    var endPoint = list1.length > list2.length ? list1.length : list2.length;
    for(var i = 0; i < endPoint; i++) {
      result.push([list1[i], list2[i]])
    }
    return result;
  }

  module.exports = r;
}());