let num = [3,6,8,25,7,5,7]
console.log(num.length);

let multiple = num.map(item=>item*2);
console.log({multiple});

let triples =[];
num.forEach(item=>{
    // console.log(item*2)
    triples.push(item*2)
});
console.log({triples});

let less = num.filter(item => item<10);
console.log({less});

let getSeven = num.find(item => item ===7)

let num2 = [2,9,39,7,4,]
let newNum = num2.filter(item => item%3 ===0)
console.log(newNum);  
