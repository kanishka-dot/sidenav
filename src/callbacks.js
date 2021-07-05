import React, { useEffect, useState } from "react";

function Callbacks() {
  const post = [
    { id: "Post 1", body: "This is Post one body" },
    { id: "Post 2", body: "This is Post two body" },
  ];
  const [count, setCount] = useState("");

  function getPost() {
    setTimeout(() => {
      const data = post.map((data, index) => {
        return <li key={index}>{data.id}</li>;
      });
      setCount(data);
    }, 1000);
  }

  //promises

  function createPost(newPost) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        post.push(newPost);

        const status = false;

        if (!status) {
          resolve();
        } else {
          reject("Error:Something went wrong");
        }
      }, 2000);
    });
  }

  //   createPost({ id: "Post 3", body: "This is Post three body" })
  //     .then(getPost)
  //     .catch((err) => console.log(err));

  //end

  // async await

  //   function createPost(newPost) {
  //     setTimeout(() => {
  //       post.push(newPost);
  //     }, 2000);
  //   }

  async function init() {
    await createPost({ id: "Post 3", body: "This is Post three body" });
    getPost();
  }

  init();
  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}
export default Callbacks;
