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

/* proxy
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
*/

let target = {
  name:'totolo',
  age:'thity-three',
  son:{
    Sname:'yadom',
    Sage:66
  }
}

function watcher(data){

  const handelOne = {
    set:function(target, property, value, receiver) {
      const res = Reflect.set(target, property, value, receiver);
      console.log(`set ${property}:${value}`);
    },
    get:function(target, key, receiver) {
            const res = Reflect.get(target, key, receiver);
            // 这个地方深度监听
            return watcher(res);
    }
  };

  return new Proxy(data,handelOne);

}


let proxyData = watcher(target);
  console.log(proxyData.name);

// function reactive(data) {
//   const proxyConfig = {
//     set:function(target, key, value, receiver) {
//       const res = Reflect.set(target, key, value, receiver);
//       updateView();
//     },
//     get:function(target, key, receiver) {
//       const res = Reflect.get(target, key, receiver);
//       // 这个地方深度监听
//       return reactive(res);
//     }
//   };
//   return new Proxy(data, proxyConfig);
// }

// function updateView() {
//   console.log("update view");
// }

// const data = {
//   path: "user",
//   user: {
//     name: "mickey",
//     avator: "xxx.png"
//   },
//   list: ["1"],
//   detail: {}
// };

// const proxyData = reactive(data);
// proxyData.path = "other";
// proxyData.user.name = "mickey_new";
// proxyData.detail = { id: 1, addr: "xxxx" };
// proxyData.detail.id = 2;
// proxyData.newProp = "new";
// // proxyData.list.push("2");
