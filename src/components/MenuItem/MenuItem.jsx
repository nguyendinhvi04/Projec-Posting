
import "/home/dev/Documents/NextJs/starting-project/src/components/MenuItem/style.css";
export function MenuItem(props) {
  return (
    <main>
      <div className="list-menu">
        <img href=""></img>
        <div className="menu-infor">
          <span className="menu-name">{props.name}</span>
          <span className="menu-detail">{props.detail}</span>
        </div>
        <span className="menu-price">{props.price}K</span>
      </div>
    </main>
  )
}
export default MenuItem;