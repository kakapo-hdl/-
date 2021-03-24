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
person.getPersonMsg
// console.log(person)