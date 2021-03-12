
exports.min = function min (array) {
  
    if (array && array.length) 
    {
      let min = Math.min.apply(null, array);
      return min;
    
  } 
  else {
  
  return 0;
 
  }
}
  
exports.max = function max (array) {
  
  if (array && array.length)
  
  {
    let max = Math.max.apply(null, array);
    return max;
    
  } 
  else 
  {
  return 0;
  
}
}

exports.avg = function avg (array) {
    if (array && array.length)
     {
       return array.reduce((a, b) => (a + b)) / array.length;
    
  }
  else {
  return 0;
  }

}

