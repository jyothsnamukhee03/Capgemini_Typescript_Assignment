// interface interface_name {  
//     // variables' declaration  
//     // methods' declaration  
// }  

interface Person {   
  name:string  
  age:number
  getPerson: (name, age)=>string;

}  
interface Employee extends Person {   
  gender:string  
  empCode:number  
}  
let empObject = <Employee>{};   
empObject.name = "Jyothsna"  
empObject.age = 21   

console.log("Name: "+empObject.name);
console.log("Age: "+empObject.age);  