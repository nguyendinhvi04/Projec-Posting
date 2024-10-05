import MenuListProduct from "./MenuListProduct.jsx";
function Cart(props){
    return(
   <main>
      <h4>Your cart</h4>
      <ul>
        props.map()
        <li>Name:</li>
        <li>Categories:</li>
      </ul>

   </main>

    )
}
export default Cart;