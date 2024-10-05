
function ReviewItem (props){
    const {name, textReview} = props;
  return(
    <main>
      <p>Name Client: {props.name}</p>
      <p>Review about product: {props.textReview}</p>
    </main>
  )



}
export default ReviewItem;