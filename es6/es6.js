class Person{
  constructor(name,age){
    this. name=name;
    this.age = age;
  }
  getPersonMsg(){
    console.log(this.name+""+this.age)
  }
}

const person = new Person('morty',23);
person.getPersonMsg();
// console.log(person)
//promise 

let myFirstPromise  = new Promise(
  (resolve,reject)=>{
    setTimeout(() => {
      console.log("past 1s");
      resolve('mordy');
      reject('fail')
      
    }, 2000);
  }
).then((result)=>{
    console.log(result);
    console.log("promise successful");
}).catch(
  err=>{
    console.log(err)
  }
)

// myFirstPromise.then((result)=>{
//   console.log(result);
//   console.log("promise successful");
// })