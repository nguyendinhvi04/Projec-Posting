import Style from '/home/dev/Documents/NextJs/starting-project/src/components/Post/Post.module.css'
function Post({name, comment}){
    // const {name, comment} = data;
    return(
        <main>
         <div className={Style.post} >
            <h5>Your post</h5>
            <p className={Style.comment}>{comment}</p>
            <h5>Your Namn</h5>
            <p className={Style.name}>{name}</p>
           </div>
        </main>    
    )
}
export default Post;