import { useEffect, useState } from "react";

export function Post() {
  const [allBlogPost, setBlogPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);
  const [isShowing, setIsShowing] = useState(false);

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
    setIsShowing(!isShowing);
    console.log(isShowing);
    // console.log(clickedPost);
    setSelectedPost(clickedPost[0]);
  }

  function isSelectedPost(id) {
    if (id === selectedPost.id) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      {allBlogPost.map((post, index) => (
        <div key={index}>
          <h3 onClick={handlePostClick} id={post.id}>
            {post.title}
            {isSelectedPost(post.id) && isShowing && <p>{selectedPost.body}</p>}
          </h3>
        </div>
      ))}
      X
    </div>
  );
}
export default Post;
