async function fetchData() {
  const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const post = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const todoData = await todo.json();
  const postData = await post.json();

  return {
    todo: todoData,
    post: postData,
  };
}

fetchData().then((data) => console.log(data))