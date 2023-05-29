
let success = true;
const performTask = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{ success? resolve ():reject()},2000)
    })
}
 const successful = async()=>{
    try{
      await performTask()
        console.log('task successful')
    }
    catch{
        console.log('task failed');
    throw new Error('task failed')
    }
}
successful();