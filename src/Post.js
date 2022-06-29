import { useEffect, useState } from "react";

export function Post() {
  const [allBlogPost, setBlogPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);

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

  function handlePostClick(e) {
    const postId = Number(e.target.id);
    const clickedPost = allBlogPost.filter((post) => postId === post.id);
    console.log(clickedPost[0]);
    // console.log(clickedPost);
    setSelectedPost(clickedPost[0]);
  }

  return (
    <div>
      {allBlogPost.map((post, index) => (
        <div key={index}>
          <h3 onClick={handlePostClick} id={post.id}>
            {post.title}
          </h3>
        </div>
      ))}
      <p>{selectedPost.body}</p>
    </div>
  );
}
export default Post;
