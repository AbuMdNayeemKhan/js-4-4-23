//==========>OBJECT LITERALS
// function objLit(name, message){
//     return {
//         name,
//         message
//     }
// }

// console.log(objLit("Nayeem", "Tomake amar cai"));

//==========>FOR OF LOOP
// const obj = { //for off loop print value of array
//     name: "Nayeem Khan",
//     age: 30,
//     job: "Softwer Engineer",
//     salary: 5000
// };

// const myArr = [1,2,3,4,5,6,7,8,9,0];

// for (newObjData of myArr) { // for in lolp print index number of aray
//     console.log(newObjData);
// }
//==========>FOR IN LOOP

// for (const allkey in myArr) {
//     console.log(allkey);
// }

//==========>TEMPLATE STRING

// const name = "Abu Md Nayeem Khan";
// const age = 32;

// console.log(`My Name is ${name}. I'm ${age} Years old.`);

//==========>DESTRUCTURING Array ES6

// const myarr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r"];
// let [a, b, c, ...z] = myarr;
// console.log(a, b, c, z);

//==========>DESTRUCTURING OBJECT ES6
// const nayeem = {
//     name: "Abu Md Nayeem Khan",
//     age: 22,
//     weight: 60,
//     height: "5'6",
//     job: "Web Developer",
//     salary: 22000
// }
// const {name, age, weight, height, job, salary} = nayeem;
// console.log(salary);

//===========>CLASS CONSTRUCTUR 

class mobile{
    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
let mobileDetails = new mobile("Nokia", "3.4", "12000");

console.log(mobileDetails);