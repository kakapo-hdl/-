## es6语法详解
**1 let** 

 使用let 声明的变量只在代码块中有效,没有变量提升

**2 const**

使用const 声明的变量只能声明一次且不能改变

**2 For of**

新增加一种迭代方法 


```
For(let item of arrays){
  console.log(item)
}
```
**3 Class**

class 类是js对象的模版可以创建构造函数和方法
```
class Person{
  constructor(name,age){
    this. name=name;
    this.age = age;
  }
  getPersonMsg(){
    console.log(this.name+""+this.age)
  }
}
```

**4 promise**

promise 回调函数，一般用于ajax之类的异步请求实现,promise 函数输入一个函数入参，带有两个对象resolve，reject,当执行成功的时候使用resolve传递数据，失败的时候使用reject 传递数据,当promise执行成功后执行then(result)函数，里面返回成功后reject 传递的信息，失败执行catch函数
```
let myFirstPromise  = new Promise(
  (resolve,reject)=>{
    setTimeout(() => {
      console.log("past 1s");
      resolve('success');
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
```

**5 async(异步)**

用async和await修饰函数和异步函数可以更直接的调用promise函数，不需要通过then之类的等待

````
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
````




**6 解构**

这个可以这么用，允许一个函数传入多个函数 function add(...args){
```
For(let item of args){
}
}
Let x = sum(,1,1,1,1,1,)
```

**7 set**

新增set对象，特性它的值是唯一的，也可以使用迭代器遍历这个对象
剩下的api 详见官网

**8 Generator**
没太懂 应该不怎么用,大概就是用generator function生成,yieid(产量)返回结果

code
```
function* infinite(){
  let index = 0;
  yield = index++;
}

const generator = infinite();
console.log(generator.next().value);
```

**9 proxy**
vue3.0用的是proxy