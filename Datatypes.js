const peopl = ["Aaron","Mel","John"];
const one = 1;
const str = "Hollo World";
const b = true;
const employee = {
    firstname : "Anirach",
    lastname : "Mingkhwan",
};
function sayHello(person){
    console.log("Hello " + person.firstname);
}

console.log(typeof peopl);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);