// -------------------
// async/await style ব্যবহার মানে sync ওয়েতে convert
// -----------------------

const data = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')

  console.log("Hellow");
  const json = await res.json();
  console.log(json);
  console.log(true);
}
data();

