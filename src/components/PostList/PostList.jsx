import Post from "/home/dev/Documents/NextJs/starting-project/src/components/Post/Post.jsx";
import Style from "/home/dev/Documents/NextJs/starting-project/src/components/PostList/PostList.module.css";
import NewPost from "/home/dev/Documents/NextJs/starting-project/src/components/NewPost/NewPost.jsx";
import {  useState, useEffect } from 'react';
import Modal from "/home/dev/Documents/NextJs/starting-project/src/components/Modal/Modal.jsx";
function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(()=>{
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts') 
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  },[]);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method : 'POST',
      body : JSON.stringify(postData),
      headers:  {
      'Content-Type' : 'application/json'
      }

  });
    setPosts((existingPosts) => [postData, ...existingPosts]);
    // create usestate array saving data when create new post 
    // 1. create post : define 1 object include 2 value (name, comment)
    // 2. after click submit will saving object to array usestate(in PostList)
    // 3. continue render array posts with value is saved from NewPost. Using function Map() for Post
  }
  const isShowNewPost = false;
  return (
    <>
      <main>
        {isPosting &&
          (
            <Modal onClose={onStopPosting}>
              {/* For props onClose will hidden Modal which is contain NewPost */}
              {isShowNewPost && (
              <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                 ) }
              {/*onCancel will stop create*/}
            </Modal>
          )}
          {!isFetching && posts.length > 0  &&
        <ul className={Style.posts}>
          {posts.map((post) => <Post key={post.comment} name={post.name} comment={post.comment} />)}
        </ul>
}
   { !isFetching && posts.length === 0 && (
      <div style={{textAlign: 'center', color: "white"}}>
        <h2>Nothing post !</h2>
        <p>Let's create your post now</p>
      </div>

   ) }
    {isFetching && (<p>Loading.....</p>)}
      </main>
    </>
  )
}
export default PostList;
