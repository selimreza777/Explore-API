

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)

    .then(res => res.json())
    .then(data => {
      // console.log(data)
      displayPost(data)
    });
};
//  Array of object 
// const displayPost = (posts) => {

//   // 1. get the container 
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML = "";

//   // console.log(postContainer);


//   // for loop use
//   // for (let i = 0; i < posts.length; i++) {
//   //   console.log(posts[i]);
//   // }
//   // for of use 
//   // for (let post of posts) {
//   //   console.log(post)
//   // }

//   // forEach loop use 
//   posts.forEach(post => {
//     // console.log(post.title)

//     // 2. create HTML element
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     // console.log(li);

//     // 3. add li into container
//     postContainer.appendChild(li)


//   });

// }

// ----------------------------------------------------------
// {
//     "userId": 10,
//     "id": 99,
//     "title": "temporibus sit alias delectus eligendi possimus magni",
//     "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
// }


const displayPost = (posts) => {
  // 1. get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // console.log(post);
    // 2.create element
    const postCard = document.createElement("div");
    postCard.innerHTML =
      `<div class="post-card">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>`;

    // 3. add to the container
    postContainer.append(postCard)

  });
};
loadPost();


