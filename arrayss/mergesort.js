function divideArray(num){
    if(num.length<=1){
        return num;
    } 
    let middle = Math.floor(num.length/2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    return sortedArray (divideArray(left),divideArray(right));

}
function sortedArray(left,right){
let emptyArray = [];
while (left.length && right.length){
    if (left[0]<right[0]){
        emptyArray.push(left.shift())

    }
    else{
        emptyArray.push(right.shift())
    }
}
 return[...emptyArray,...left,...right]
}

 let num = [10,2,56,3,8,4,11];
 console.log(divideArray(num));


// given a sorted array if n elements "t",find the index of "t" in the array .return -1 if the target element is not found
 
 function binarysearch(array,target){
  if (array.length<=1){
    return array;
  }
  let leftIndex=0
  let rightIndex = array.length -1
  while(leftIndex <= rightIndex){
let middleIndex=Math.floor((leftIndex + rightIndex)/2)
 if(target === array[middleIndex]){
    return middleIndex
 }
 if(target < array[middleIndex]){
    rightIndex -1
}else{
  leftIndex = middleIndex + 1
}

}
 
 }