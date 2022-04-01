import './side.css';
import { Link } from 'react-router-dom';
function Side()
{
    // Menu Bar
    return(
        
        <div className="side_menu">
           <Link to={"/home.js"}>
           <h1 className='hme'>HOME</h1>
           </Link>

            <Link to={"/Main.js"}>
            <h1 id='mnu'>MENU</h1>
            </Link>

           
            
        </div>
      
    );
}

export default Side;