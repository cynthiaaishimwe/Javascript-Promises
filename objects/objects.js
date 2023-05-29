let person = {
 name:"susan",
  age:25,
  height:"5ft3Inch",
  friend:{
    name:"amanda",
    age:20

  }


}
let student = new Object();
student.name = "mary" 
console.log(person.age)
console.log(person['name'])
 console.log(person.friend.name);
 console.log({student})
 console.log(person['friend']['age']);

 person.age = 27;
 person.school = 'Akirachix';
 console.log({person});

 let person2 = Object.assign(person);
 console.log({person2});

 let keys = Object.keys(person);
 console.log({keys});
 
 let values = Object.values(person);
 console.log({values})
