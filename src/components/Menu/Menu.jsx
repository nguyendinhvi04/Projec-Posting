import MenuItem  from "../MenuItem/MenuItem.jsx";
export function Menu(){
return (
<div className="Menu">
    <ul>
     <MenuItem name = "Ca phe " price = "29" detail = "Ca phe mang huong vi thom va dang"   />
     <MenuItem name = "Ho tieu den" price= "27" detail ="thom dung lam huong vi nhieu mon an "/>
     <MenuItem name = "Hat dieu" price = "30" detail = "de an trong cac dip le"/>
     <MenuItem name = "macca(Bestseller)" price = "32" detail="dung nguyen lieu boi bo"/>
    </ul>
</div>
)
}
export default Menu;