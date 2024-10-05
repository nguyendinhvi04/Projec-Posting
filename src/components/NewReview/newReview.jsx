export function NewReview (props){
  return (
   <main>
    <div>
      <form className='form'>
        <p>
            <label htmlFor="body">Submit Review Of You</label> <br></br>
            <textarea  className="body-review" id="body" required rows={2} onChange={props.onTextChange}/>
            <p>Your Name</p>
            <input type="text"  className="input-name-client" onChange={props.onNameChange}/>
            <button className="button-review">Cancel</button>
            <button className="button-review">Submit</button>
        </p>
      </form>

    </div>
   </main>
  );
} 
export default NewReview;