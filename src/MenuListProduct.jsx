// truyen data tu day den cart
function MenuListProduct(){
   var dataProduct = [
   {name : "Ca phe", categories: "Robusta" },
   {name : "Hat Dieu" , categories: "DakLak" } ];
    return(
       <main>
         <div>
            <h4>Menu</h4>
            {dataProduct.map((item, index)=> (
            <ul key={index}>
               
                <li>{item.name}</li>
                <li >{item.categories}</li>            
               <button >Add to cart</button>
                </ul>
            ))}
         </div>
           
        </main>
        )
}
export default  MenuListProduct;