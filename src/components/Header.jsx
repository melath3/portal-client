import { Link } from "react-router-dom";
import "../components/css/header.css"
import { Button } from "semantic-ui-react";
import TaskList from "./TaskList";
import ManagerHome from "../pages/ManagerHome";
import UserHome from "../pages/UserHome";

 

const Header = () => {
  return (
  <div className="header">
    <div className="headerTop">
<h2 class="headerText">Volunteer</h2>

    </div>
   <div className="headerP">
    <h2 className="headerT">Placeholder text</h2>
    <p>
    Placeholder paragraph
    </p>
   </div>
<div className="tasks">
  <h2> Currently Available Tasks</h2>
<Link to="/manager">
    <button className="userButton">User Page</button>
    </Link>
<ManagerHome/>
</div>
   <div className="pages">
    <Link to="/user">
    <button className="managerButton">manager Page</button>
    </Link>
    <UserHome/>



   </div>

  </div>
)};

export default Header;