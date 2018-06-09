let x = 4;
let y = 'Wizeline';
let z = true;

console.log(typeof z);

let array = [1,'2', 3];

array.push("4");
array.unshift("0");
console.log(array.length);
let a = array.pop();
console.log(a);

const numbers = [1,2,3,4,5];
//For Arrays
//Val is the value of Each iteration
//in this case you have a function inside another Function

numbers.forEach(function(val){
  console.log(val);
});
const temperature = 35;

let status = temperature > 25 ? 'Hot': 'Cold';
////////////////////////


const objeto = {
  nombre: 'objeto',
  clase: 'clase objeto',
  edad: '0 años',
  toString : function(string){
      console.log(this.nombre+' | '+this.clase+' | '+this.edad +' | '+string)
  }
};
objeto.newProp = 'Nueva Propiedad';
objeto['Nueva Propiedad'] = 'asdad';
objeto.nombre = 'Nuevo Nombre';
console.log(objeto.nombre);
objeto.toString(objeto['Nueva Propiedad']);
