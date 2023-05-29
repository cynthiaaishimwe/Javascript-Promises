let student = {
    name:"Ann",
    age:20,
    introduce:function(){
        console.log("hello")
        console.log(`hello my name is ${this.name}`)

    }

}
student.introduce();
student.hobby=function(){
    console.log('I love swimming')
}
console.log({student});
student.hobby();
delete student.age;
console.log({student})
student.introduce()
