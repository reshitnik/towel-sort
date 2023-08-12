
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
    return [];
  } else if (matrix.length === 0){
  return [];
  }
  let newArr = []
  for (i=0; i<matrix.length; i++){
    if (i%2==0){
    let oddArr = matrix[i].sort((a,b) => a-b);
    newArr = newArr.concat(oddArr);
    }else {
    let evenArr = matrix[i].sort((a,b) => b-a);
    newArr = newArr.concat(evenArr);
    };
  };
return newArr;
}

