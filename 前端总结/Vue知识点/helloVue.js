
// person = {
//   name: 'totolo',
//   age: 25,
//   height:'172cm',
//   son:{
//     sonName:88,
//   }
// }

// class observe{


// }

// function observe(obj){
//   if(!obj instanceof Object || obj==null){
//     return;
//   }
//   Object.keys(obj).forEach(key => {
//      watcher(obj,key,obj[key])
//   });
// }

// function watcher(obj,key,val){
//   if(typeof val == "object"){
//     observe(val);
//   }
//   let dep = new Dep();
//   Object.defineProperty(obj,key,{
//     enumerable: true, // 可枚举
//     configurable: true,
//     get:function(){
//       console.log(`get ${val}`);
//       return val;
//     },
//     set:function(newValue){
//       if(newValue = null) return;
//       dep.notigy();
//       console.log(`newValue is ${newValue}`);
//       val = newValue;
//     }
//   });
// }
// console.log(person);
// observe(person);
// console.log(person);
// person.son.sonName = `mordy`;



// class Observe{
//   constructor(obj){
//     this.data = obj;
//     if(!obj instanceof Object || obj==null) return;
//     //添加监听事件
//     Object.keys(this.data).forEach((key)=>{
//       this._listen(this.data,key,this.data[key]);
//     })
//   }

//   _listen(obj,key,val){
//   new Observe(val);
//   let dep = new Dep();
//   Object.defineProperty(obj,key,{
//     enumerable: true, // 可枚举
//     configurable: true,
//     get:function(){
//       if(dep.target) dep.addSub(dep.target);
//       return val;
//     },
//     set:function(newValue){
//       if(newValue = val) return;
//       dep.notigy();
//       val = newValue;
//     }
//   })
// }
// }


// class Dep{
//   constructor(){
//     this.subs=[]
//   }
//   addSub(sub){
//     this.subs.push(sub)
//   }
//   notigy(){
//     this.subs.forEach(
//       function(sub){
//       sub.update();
//     })
//   }
// }
// Dep.prototype.target = null;


class mvvm{

  observe(data){
    Object.keys(data).forEach((key)=>{
      this.defineReactive(this.data,key,this.data[key]);
    })
  }

  defineReactive(obj,key,val){
    if(typeof obj =="object"){
      this.observe(val);
    }
  let dep = new Dep();
  Object.defineProperty(obj,key,{
    enumerable: true, // 可枚举
    configurable: true,
    get:function(){
      if(dep.target) dep.add(dep.target);
      return val;
    },
    set:function(newValue){
      if(newValue = val) return;
      dep.notigy();
      val = newValue;
    }
  })
  }

  compile(dom){

  }
}


class Dep{
  constructor(){
    this.watchers=[];
  }
  add(watcher){
    this.watchers.push(watcher)
  }
  notify(value){
    this.watchers.forEach(watcher => watcher.update(value))
  }
}

class Watcher{
  constructor(node,type){
    this.node = node;
    this.type = type;
  }
  update(value){
    if(this.node== "input"){
      this.node.value = value
    }
    if(this.type== "text"){
      this.node.nodeValue = value
    }
  }
}