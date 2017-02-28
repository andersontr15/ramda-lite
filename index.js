(function() {
  /* 
    Theodore Anderson 02/28/2017
    Ramda Lite
  */
 'use strict';
  var r = {};
  
  // add 
  r.addTwo = (a,b) => {
   return a + b
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
    try {
      return a / b 
    }
    catch(exception) {
      throw new Error(exception)
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

  //identity
  r.identity = function(val) {
    return val;
  }

  //keys 
  r.keys = function(object) {
    var result = [];
    for(var key in obj) {
      result.push(key)
    }
    return result;
  }

  //last 
  r.last = function(list) {
    return list[list.length - 1];
  }

  //map 
  r.map = function(fn, list) {
    var result = [];
    for(var i = 0; i < list.length; i++){
      result.push(fn(list[i]))
    }
    return result;
  }

  //memoize 
  r.memoize = function(fn) {
    var cache = {};
    return function() {
      if(cache.hasOwnProperty(fn)) {
        return cache[fn]
      }
      else {
        cache[fn] = fn;
        return cache[fn];
      }
    }
  }

  //multiply 
  r.multiply = function(a,b) {
    return a * b
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

  //tail 
  r.tail = function(list) {
    return list.slice(1)
  }

  //take 
  r.take = function(val, list) {
    return list.slice(0, val)
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
