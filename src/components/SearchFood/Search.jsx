import Style from "../SearchFood/search.css";
import { useState } from "react";
export function Search (props){ 
    let enteredBody ="";
    function changeBodyHandler(event){
         enteredBody =event.target.value;
    }
return (
     <main>
       <div class={Style["search-container"]}>
    <input type="text" class={Style["search-input"]} placeholder="Search..." onChange={changeBodyHandler}/>
    <button class="search-btn" ><i class="fa fa-search"></i></button>
</div>

     </main>
);
}
export  default Search;     