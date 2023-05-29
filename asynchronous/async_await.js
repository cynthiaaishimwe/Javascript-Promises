function greet(){
    console.log('welcome to our site')
};

let data = [{}];
let createUser = new Promise((resolve,reject)=>{
    if (data){
        // resolve('user successfully created')
        setTimeout(()=>{resolve('user suceessfully created')},5000);
    }
    else{
        // reject('user already exists')
        setTimeout(()=>{resolve('user already exists')},5000);
    }
})
 .then(()=>console.log('sucess'))
 .catch(()=>console.log(''))

 async function createUserAccount(){
    let response =  await createUser;
    console.log({response})
}
createUserAccount();
