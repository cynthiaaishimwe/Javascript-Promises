let greet = ()=>{
    console.log('hello world')
}
let people = () =>{
    console.log('there are many people today')
};
people();
setInterval(greet,2000);
clearInterval("stop",2000)