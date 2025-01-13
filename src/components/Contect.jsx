import { useState } from "react";

function Contect() {
  const [name,setName]=useState('');
  const[message, setMessage]=useState('');
  const delit= () => {
    alert( "תודה שיצרת עימנו קשר"+name);
    setName('');
    setMessage('');
  }
  return(<>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    <p>צור קשר עם החברה המדהימה שלנו עוד היום</p>
    <p>ליצירת קשר:</p>
    <input type="text"
           placeholder="הכנס את שמך"
           value={name}
           onChange={(e)=>setName(e.target.value)}/>
    <input type="text" 
           placeholder="מה תרצה לאמר לנו?" 
           value={message}
           onChange={(e)=>setMessage(e.target.value)}/>
    <button onClick={delit} >לשליחה</button>

    </>
    )
  
}
export default Contect;
