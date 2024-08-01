import { useState } from "react";

const List = () =>{
    
    const [list,setlist] = useState([]);
    
    return(
        <div>
            <h2>リストに追加して表示するだけ</h2>
            <input type="submit" value="1" onClick={()=>{setlist([...list,"1"])}} />
            <input type="submit" value="2" onClick={()=>{setlist([...list,"2"])}} />
            <input type="submit" value="3" onClick={()=>{setlist([...list,"3"])}} />
            <h3>{list}</h3>
            <ul>{list.map((task)=>{
                return <li>{task}</li>
            })} </ul>
        </div>
    )
}
export default List;