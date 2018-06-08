function isSorted(arr1, arr2){
  let newArr = [];
  let i = 0;
  let j =0;
  
  while( i < arr1.length && j < arr2.length ){
         if(arr1[i] > arr2[j]){
          newArr.push(arr2[j++]);
        }else{
          newArr.push(arr1[i++]);
        }
      }
  return newArr;
}

let test1 = [1,3,5,7];
let test2 = [2,4,6,8];

isSorted(test1,test2);