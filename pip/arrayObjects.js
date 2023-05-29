let people =[
    {name:"Ann",age:20,height:'3ft'},
    {name:"henry",age:30,height:'7ft'},
    {name:"Susan",age:40,height:'6ft'},

];

let ages = people.map(item =>item.age);
console.log({ages})

 let weight = people.map(item=>{
     return{
         ...item,
         weight:50,
     }
 })
 console.log({weight});

 let changedWeight = weight.map(item =>{
    if (item.name ==='Ann'){
        item.weight =60;
    }
    return item
 })
 console.log({changedWeight});
 