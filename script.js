// console.log('Explore API');

// const person = {
//   name: "selim",
//   fruit: "dalim",
//   dish: "halim",
//   friends: ["alim", "karim", "moin", "ladim", "jidan"],
//   isRich: false,
//   money: 34500,
// };

// console.log(person)
// // JSON --> JS object with Notation
// //*** JSON.stringify
// // *** JSON.parse

// // stringify version [string]
// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// // string k eta objectct e rupantor kore

// const  personJSON=JSON.parse(personJSON);
// console.log(personJSON);


// ----------------------
// JSON.stringify() 
// কাজ: JavaScript object/array কে JSON string এ convert করা
// --------------------------------

const student = { name: "selim", id: 123, isRegular: true }
// object--> JSON string

const jsnData = JSON.stringify(student);
console.log("object --> JSON string:", jsnData);


// -------------------
// JSON.parse()
// 👉 কাজ: JSON string কে আবার JavaScript object/array এ convert করা
// ----------------------

const jsnData1 = '{"name":"selim","id":123,"isRegular":true}';

// JSON String --> Object 

const student2 = JSON.parse(jsnData1);
console.log("JSON string -->object:", student2);

console.log(student2.name);

// ----------------------------

