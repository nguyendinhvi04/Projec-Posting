import classes from './NewPost.module.css';
import { useState } from 'react';
function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnterAuthor] = useState('');
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnterAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      comment: enteredBody,
      name: enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body" className={classes.label}>Your post </label>
        <textarea id="body" className={classes.textarea} required rows={4} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name" className={classes.label}>Your name</label>
        <input type="text" className={classes.input} id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button >Submit</button>

      </p>
    </form>
  );
}
export default NewPost;
