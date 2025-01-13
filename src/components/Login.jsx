import { useContext, useState } from "react";
import MyContext from "../context/context"

function Login(){

    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const login= useContext(MyContext).login;

    const onLogin=()=>{
       login(email,password);
      
       
    }
    return<>

    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <input type="email" placeholder="הכנס אימייל" onChange={e=>{setEmail(e.target.value)}}></input>
    <input type="password" placeholder="הכנס סיסמא" onChange={e=>{setPassword(e.target.value)}}></input>
    <button onClick={()=>onLogin()}>להתחברות</button>
    <h1>Login</h1>
    </>
    

}
export default Login;