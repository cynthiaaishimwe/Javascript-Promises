let num = [3,5,10,30,8,6];
for(let i =0; i<num.length;i++){
    console.log(i);
    console.log(num[i]);

}


for(let i =0; i<num.length;i++){
   
    console.log("option1",num[i]);
    if(i ===3){
        break;
       
    }
        console.log("option3",num[i]);
 }

 for(let i =0; i<num.length;i++){
   
    if(i ===3){
        continue;
       
    }
        console.log("continue",num[i]);
 }
