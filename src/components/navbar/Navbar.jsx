import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import {Config} from '../../Config';




export default function Navbar() {

  const {user, dispatch} = useContext(Context);
// const PF = "http://localhost:5000/images/"

  const handleLogout =() =>{
    dispatch({type:"LOGOUT"})
  }

  return (
      
    <div className="top">
          
<div className="topLeft">

      <Link   to="/">
      <img className="topIcon" src="https://media.licdn.com/dms/image/C4E03AQEVOwsIGC-kow/profile-displayphoto-shrink_800_800/0/1660308234341?e=2147483647&v=beta&t=-YHcXs0mA2PLetSGgg5_q2szsSFkISSPsCNWo6cz9Lc" alt="SSGI-logo" />
      </Link>
</div>
      <div className="topRight">
        <ul className="topList">
        
          {/* <li className="topListItem">
           <Link style={{ textDecoration: 'none', color:"rgb(219, 142, 40)" }} to="/about">About</Link>
          </li>
          <li className="topListItem">
           <Link style={{ textDecoration: 'none', color:"rgb(219, 142, 40)"  }} to="/contact">Contact</Link>

          </li> */}
         
          {/* <li className="topListItem">
           <Link style={{ textDecoration: 'none', color:"rgb(219, 142, 40)"  }} to="/manager">Manager </Link>

          </li> */}
          

          <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
     
          
        </ul>
      
       
      </div>
      <div className="topRight">
      {user ? (
        <Link to="/settings">
        <img 
                 className="topImg"
                 src={`${Config.imgUrl}`+user.profilePic} 
                 alt="" 
              /></Link>
          ) : (
              <ul className="topList">
                 <li className="topListItem">
           <Link style={{ textDecoration: 'none', color:"rgb(219, 142, 40)"  }} to="/user">For Managers </Link>

          </li>
               <li className="topListItem">
                 <Link className="link" style={{ textDecoration: 'none', color:"rgb(219, 142, 40)"  }} to="/login">
                   Login
                 </Link>
               </li>
               <li className="topListItem">
                <Link className="link" style={{ textDecoration: 'none', color:"rgb(219, 142, 40)"  }} to="/register">
                  Register
                </Link>
               </li>
              </ul>
              

            )
          }
          
            
            </div>
    <div>
    
    </div>

    </div>
    
   
  )
}
