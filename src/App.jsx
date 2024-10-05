import './index.css';
import { useState } from 'react';
import PostList from './components/PostList/PostList.jsx';
import MenuListProduct from './MenuListProduct.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx'
import Cart from './Cart';
function App() {
   const [modalIsVisible, setModalIsVisible] = useState(false);
   function hiddenModalHandler() {
      setModalIsVisible(false);
   }
   function showModalHandler() {
      setModalIsVisible(true);
   }
   return (
      <main>
         <h1>VILAND Post</h1>
         <h4>Begin new post of you</h4>
         <MainHeader onCreatePost={showModalHandler} />
         <PostList isPosting={modalIsVisible} onStopPosting={hiddenModalHandler} />
      </main>
   )
}
export default App;