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



  
  module.exports = r;
}());
