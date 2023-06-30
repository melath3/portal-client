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
      <img className="topIcon" src="https://www.ethiosss.org/wp-content/uploads/2022/09/photo_2022-09-11_16-29-03-1.jpg" alt="SSGI-logo" />
      <Link style={{ color: "rgb(165, 91, 42)", textDecoration: 'none' }}  to="/"><h2> SSGI VOLUNTEERS</h2></Link>
</div>
      <div className="topCenter">
        <ul className="topList">
        
          <li className="topListItem">
           <Link style={{ textDecoration: 'none', color:"rgb(165, 91, 42)" }} to="/about">About</Link>
          </li>
          <li className="topListItem">
           <Link style={{ textDecoration: 'none', color:"rgb(165, 91, 42)"  }} to="/contact">Contact</Link>

          </li>
          

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
                 <Link className="link" to="/login">
                   LOGIN
                 </Link>
               </li>
               <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
               </li>
              </ul>
              

            )
          }
          
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
    
    </div>
  )
}
