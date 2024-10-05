import { useState } from "react";
import NewReview from "../NewReview/newReview";
import ReviewItem from "../ReviewItem/ReviewItem.jsx";
export function ReviewList(){
    const [textReview, setTextReview] = useState('');
    textReview[0];
    const [name, setName] = useState('');
    name[0];
    function changeTextHandler(event){
        // get event from review client
        setTextReview(event.target.value);
    } 
    function changeNameHandler(event){
        setName(event.target.value);
    } 
    return (
   <main>
    <Modal/>
      <NewReview onTextChange ={changeTextHandler} onNameChange={changeNameHandler} 
         onCancel={""}/> 
      <ReviewItem name="A" textReview=""/>
      <ReviewItem name={name} textReview= {textReview}/>
      <ReviewItem name="C" textReview=""/>
   </main> 
    )
}
export default ReviewList;