import { useContext, useState } from "react";
import MyContext from "../context/context"

 function Register(){

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    
    const register=useContext(MyContext).register;
    const onRegister=()=>{
        const newUser = { id: 0, name, email, password };
        if (!newUser.email) {
            alert("יש להזין כתובת אימייל תקינה");
            return;
        }
        register(newUser);
       
    }

    return<>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <h1>הרשמה</h1>
    <form>
    <input type="text" placeholder="הכנס את שמך" required onChange={e=>setName(e.target.value)} ></input>
    <input type="password" placeholder="בחר סיסמא" required onChange={e=>setPassword(e.target.value)} ></input>
    <input type="email" placeholder="הכנסת כתובת אימייל"  required onChange={e=>setEmail(e.target.value)} ></input>
    <button onClick={onRegister}>לסיום ההרשמה</button>
    </form>
    </>
    

}
export default Register;