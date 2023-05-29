let a = 30;
switch(a){
    case 30:
     console.log("a is 30");
     break
     case 40:
    console.log("a is 40");
    break;
    default:
        console.log("a is not found");
       break 

}
// Write a function that takes in an array of numbers and consoles the first four
//  items multiplied by 8 and the last two added by 5. Console the array with the new values
let array2=[1,5,3,8,4,7,9,1,13]
 function ArrayNumbers(array){

    for(let i=0; i<array2.length;i++){
        if(i<4){
            array2[i]*=8
        }else{
            array[i]+=5
        }
    }
    console.log(array2)
}
ArrayNumbers(array2)
