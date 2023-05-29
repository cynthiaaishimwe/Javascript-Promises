  let a = 20;  
//   global variable can be accessed any function since it is not declared inside any function
function add(b){
    console.log(a+b);
    let fruits = "apple"
    // the above is a local variable since it is declared inside a block of code 
    // it can only be consoled inside a block of code otherwise outside it can not.
    console.log(fruits);
}
add(50);

function greet(){
    let hello = "hi"
    function talk(){
        let c ="hello there"
        console.log(`${hello} ${c}`);
// we are able to access both hello and hello there because they are both 
// within the same block code.
// let hello and let c
    }
   talk();
}
greet();

