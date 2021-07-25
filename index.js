function sumItems(array) {
  if (Array.isArray(array[0])) {
    return sumItems(array[0]) + sumItems(array.splice(1));
  } else if (array.length === 1) {
    return array[0];
  } else if (array.length === 0){
    return 0;
  } else {
    return array[0] + sumItems(array.splice(1)); 
  }
}

module.exports = sumItems;