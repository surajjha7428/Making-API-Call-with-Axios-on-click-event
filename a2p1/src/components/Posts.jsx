import { useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    setError(false);
    try {
      let res = await axios({
        method: "get",
        url: "https://reqres.in/api/users?page=2",
      });
      setPosts(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      <button className="btn" onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>

      {posts.length > 0 && (
        <div className="posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              Name={post.first_name}
              email={post.email}
              avatar={post.avatar}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
