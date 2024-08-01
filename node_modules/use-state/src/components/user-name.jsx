import { useState } from "react";

const UserName = () =>{
    const [lastname,setlastname] = useState("山田");
    const [firstname,setfirstname] = useState("太郎");
    
    return(
        <div>
            <h2>ユーザーネーム入力して表示するだけ</h2>
            <h3>{lastname} {firstname} </h3>
            <input type="text" placeholder="山田" onChange={(e)=>{setlastname(e.target.value)}} />
            <input type="text" placeholder="太郎" onChange={(e)=>{setfirstname(e.target.value)}} />
        </div>
    )
}
export default UserName;