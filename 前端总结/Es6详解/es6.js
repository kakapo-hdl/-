/*class

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
*/

/*promist
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
*/

 
function after2Second(){
  return new Promise(
    (resolve,reject)=>{
      setTimeout(() => {
        console.log("past 1s");
        resolve('mordy');
        // reject('failq')
      }, 2000);}
  )
}

async function asyncCall(){
  console.log("call");
  const result = await after2Second();
  console.log(result);
}
asyncCall();