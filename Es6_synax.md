## es6语法详解
**1 let** 

 使用let 声明的变量只在代码块中有效

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
···
Class person(){
  construct(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex
  }
  
  getPersonMsg(){
    console.log(this)
  }
}
···