import { useEffect, useState } from "react";

export function Post() {
  const [allBlogPost, setBlogPost] = useState([]);

  async function fetchAllPosts() {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts");
    return post.json();
  }

  useEffect(() => {
    (async () => {
      const allPosts = await fetchAllPosts();
      setBlogPost(allPosts);
    })();
  }, []);

  return allBlogPost.map((post, index) => (
    <div key={index}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>{post.userId}</p>
      <p>{post.id}</p>
    </div>
  ));
}
export default Post;
