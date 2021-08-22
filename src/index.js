
exports.min = function min (array) {
  if(array == null || array.length == 0) {
    return 0;
  }
  else {
  let minEl = Math.min(...array); 
  return minEl;
  }
}

exports.max = function max (array) {
  if(array == null || array.length == 0) {
    return 0;
  }
  else {
  let maxEl = Math.max(...array); 
  return maxEl;
  }
}

exports.avg = function avg (array) {
  if(array == null || array.length == 0) {
    return 0;
  }
  else {
  sum = 0;
  for (let i = 0; i < array.length; i ++) {
    sum += array[i];
  }
let avg = sum /  array.length; 
return avg; 
  }
}
