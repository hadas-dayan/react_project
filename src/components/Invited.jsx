import { Link } from "react-router-dom";

function Invited(){
    return<>
    <h1>הזמנתך בוצעה בהצלחה</h1>
    <h1>חשבונית נשלחה למייל</h1>
    
    <Link to={"/home"}>
        <button> לחזרה לאתר </button>
       </Link>
   </>

}
export default Invited;