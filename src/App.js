import React from "react";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [posts, setPosts] = React.useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  const addPost = () => {
    const newPost = {
      body: inputValue,
      id: Date.now(),
    };

    localStorage.setItem("posts", JSON.stringify([...posts, newPost]));
    setPosts([...posts, newPost]);
    setInputValue("")
  };
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);

    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <div className="m-4 text-center container mx-auto max-w-4xl">
        <div className="flex items-center justify-center">
          <input
            className="outline-none border-2 border-solid border-blue-400 mr-5 px-3 py-2 rounded-lg w-52 focus:w-60 transition-all"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Введите текст"
          />
          <button
            onClick={addPost}
            className="bg-blue-500 font-bold text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Добавить
          </button>
        </div>
        <ul className="list-none text-center">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border-2 border-solid border-blue-400 p-3 m-2"
              onClick={() => deletePost(post.id)}
            >
              {post.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
