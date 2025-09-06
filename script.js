
// fetch('https://jsonplaceholder.typicode.com/todos/1')

//   // API থেকে data আনবো
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });

// -----------------

const loadData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    //promise of response

    // API থেকে data আনবো
    .then(response => response.json())

    //promise of json data 
    .then(data => {
      console.log(data);
    });
}
// -----------------------

// const loadPost = () => {

//   const url = "https://jsonplaceholder.typicode.com/posts#";
//   fetch(url)
//     .then(response => response.json())
//     .then(json => {
//       // multiline comment 
//       console.log(json);
//       displayData(json);
//     });
// };

// const displayData = (postData) => {
//   postData.forEach(postData => {
//  console.log(postData)
//   });

// }

// ai theke cleen kore 

// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then(response => response.json())
//     .then(json => {
//       // multiline comment 
//       console.log(json);
//       displayData(json);
//     })
//     .catch(err => console.error("Error:", err));
// };

// const displayData = (postData) => {
//   postData.forEach(post => {
//     console.log(post);
//   });
// };



// // console.log('Explore API');

// // const person = {
// //   name: "selim",
// //   fruit: "dalim",
// //   dish: "halim",
// //   friends: ["alim", "karim", "moin", "ladim", "jidan"],
// //   isRich: false,
// //   money: 34500,
// // };

// // console.log(person)
// // // JSON --> JS object with Notation
// // //*** JSON.stringify
// // // *** JSON.parse

// // // stringify version [string]
// // const personJSON = JSON.stringify(person);
// // console.log(personJSON, typeof personJSON);

// // // string k eta objectct e rupantor kore

// // const  personJSON=JSON.parse(personJSON);
// // console.log(personJSON);


// // ----------------------
// // JSON.stringify()
// // কাজ: JavaScript object/array কে JSON string এ convert করা
// // --------------------------------

// const student = { name: "selim", id: 123, isRegular: true }
// // object--> JSON string

// const jsnData = JSON.stringify(student);
// console.log("object --> JSON string:", jsnData);


// // -------------------
// // JSON.parse()
// // 👉 কাজ: JSON string কে আবার JavaScript object/array এ convert করা
// // ----------------------

// const jsnData1 = '{"name":"selim","id":123,"isRegular":true}';

// // JSON String --> Object

// const student2 = JSON.parse(jsnData1);
// console.log("JSON string -->object:", student2);

// console.log(student2.name);

// // ----------------------------

