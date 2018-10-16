class person {
 constructor(name="jkbbkj",age){
     this.age=age;
     this.name=name;
 }
  getgreeting(){
    //  return "hello"+ this.name+"regrrg";
 
        return `this is na aege section ${this.age} ${this.name}`;  
          
}

}
class student extends person{
  constructor(name,age,role){
  super(name,age);   
    this.role=role;  
}
}

const me =new student("andrew",25,"dsfd");
console.log(me);
const other=new person();
console.log(other);