import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Navbar() {

  const {user, dispatch} = useContext(Context);
const PF = "http://localhost:5000/images/"

  const handleLogout =() =>{
    dispatch({type:"LOGOUT"})
  }
  
  return (
    <div className="top">
      <img src="./ssgi.png" alt="SSGI-logo" />
<h2> SSGI VOLUNTEERS</h2>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="topListItem">
           <Link className="link" to="/about">About</Link>
          </li>
          <li className="topListItem">
           <Link className="link" to="/contact">Contact</Link>

          </li>
          <li className="topListItem">
           <Link className="link" to="/create">Create Tasks</Link>

          </li>

          <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
          
        </ul>
      </div>
      <div className="topRight">
      {user ? (
        <Link to="/settings">
        <img 
                 className="topImg"
                 src={PF+user.profilePic} 
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
