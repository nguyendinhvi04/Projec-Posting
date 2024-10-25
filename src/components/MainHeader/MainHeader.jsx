import classes from './MainHeader.module.css';
import { MdPostAdd, MdMessage } from 'react-icons/md';
   function MainHeader ({onCreatePost}){
    return(
      <main>
           <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>


      </main>

    )
}
export default MainHeader;