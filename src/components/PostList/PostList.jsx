import Post from "/home/dev/Documents/NextJs/starting-project/src/components/Post/Post.jsx";
import Style from  "/home/dev/Documents/NextJs/starting-project/src/components/PostList/PostList.module.css";
import NewPost from "/home/dev/Documents/NextJs/starting-project/src/components/NewPost/NewPost.jsx";
import {useState} from 'react';
import Modal from "/home/dev/Documents/NextJs/starting-project/src/components/Modal/Modal.jsx";
function PostList({isPosting, onStopPosting}){
     // quan li 1 danh sach cac bai dang 
    const [posts, setPosts] = useState([])
    function addPostHandler (postData){
      setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
          <main>
            {isPosting && 
            (
              <Modal onClose={onStopPosting}>
      <NewPost  onCancel={onStopPosting} onAddPost={addPostHandler}/>
      
      </Modal>
            )}
            <ul className={Style.posts}> 
           {posts.map((post)=> <Post name = {post.name} comment={post.comment}/>)}
            </ul>
          </main>
        </>
    )
}
export default PostList;
