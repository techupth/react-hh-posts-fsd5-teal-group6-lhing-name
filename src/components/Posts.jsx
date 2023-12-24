import { useState } from "react";
import postsDetail from "./Posts-detail.jsx";
function Posts() {
  const [post, setPost] = useState(postsDetail);

  const addLike = (i) => {
    const newPost = [...post];
    newPost[i].likes += 1;
    setPost(newPost);
  };

  const subtractLike = (i) => {
    const newPost = [...post];
    if (newPost[i].likes > 0) {
      newPost[i].likes -= 1;
    }
    setPost(newPost);
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {post.map((item, index) => {
          return (
            <div class="post-item" key={index}>
              <div class="post-header">
                <h2>{item.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{item.likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    addLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    subtractLike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
