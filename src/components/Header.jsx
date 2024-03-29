import { Link } from "react-router-dom";
import "../components/css/header.css"
import { Button } from "semantic-ui-react";
import TaskList from "./TaskList";
import ManagerHome from "../pages/ManagerHome";
import UserHome from "../pages/UserHome";
import Slider from "./Slider";
import Navbar from "./navbar/Navbar";

 

const Header = () => {
  return (
  <div className="header">
   

<article class="art group">
  
  <section class="content">
  

    <h2 class="headline" style={{color:"rgb(219, 142, 40)"}}>Explore SSGI Volunteer Programs</h2>
  
    <div className="headText">
    <p  >Find the perfect program to showcase your knowledge & get noticed by recruiters from top companies. </p>
    <button className="managerButton">Become A Volunteer</button>
    </div>
  </section>
  <img class="img right" src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?w=900&t=st=1689184438~exp=1689185038~hmac=7b63fe242bed2a50756e3ca7a9e7d0034dfa13f5d7af39d638280b5ea6b048d7" alt="Image"/>
</article>


{/* <div className="line">
   <figure class="figure" className="line__figure">
  <img src="https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="figure__image rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
  <p className="img__text">
  Volunteer programs contain real industry tasks
  </p>
  <p className="img__text">
  to develop transferable skills for workplace readiness. 
  </p>
 
</figure>
   </div> */}


<div class="customCards">
  <h2 className="cardTitle"> Browse Volunteer Programs </h2>
  <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
  <ManagerHome/>
</div>

{/* <div class="slide">
  <Slider/>
 </div> */}



<article class="article group">
  <img class="image right" src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" alt="team in office"/>
  <section className="articleContent">
    <div>
    <h2 className="articleText">
    Showcase your skills
    </h2>
    
    <p  className="articleParagraph">
    Virtual work experience programs contain real industry tasks, to develop transferable skills for workplace readiness. You don’t just learn new skills, you’re able to showcase your knowledge & get noticed by recruiters from top companies.
       </p>
    <button className="managerButton">Join Us</button>
    </div>
  </section>
</article>



<article class="article group" style={{border:"10px green"}}>
  <img class="image left" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="people working in group"/>
  <section class="articleContent">
    <h2 class="articleText">
    Showcase your skills
    </h2>
    
    <div className="articleParagraph" >
    Virtual work experience programs contain real industry tasks, to develop transferable skills for workplace readiness. You don’t just learn new skills, you’re able to showcase your knowledge & get noticed by recruiters from top companies.
    </div>
    <button className="managerButton" style={{padding:"10px 0px 10px 10px"}}>Join Us</button>
  </section>
</article>

<div class="container my-5">
  <div class="row justify-content-center" className="formContainer">
    <div class="col-lg-9">
      <h1 className="formsText" class="mb-3">Contact Us</h1>
      <form className="form">
        <div class="row g-3" className="formRow">
          <div class="col-md-6">
            <label for="your-name" class="form-label">Name</label>
            <input type="text" class="form-control" id="your-name" name="your-name" required/>
          </div>
          <div class="col-md-6">
            <label for="your-surname" class="form-label">Surname</label>
            <input type="text" class="form-control" id="your-surname" name="your-surname" required/>
          </div>
          <div class="col-md-6">
            <label for="your-email" class="form-label">Email</label>
            <input type="email" class="form-control" id="your-email" name="your-email" required/>
          </div>
          <div class="col-md-6">
            <label for="your-subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="your-subject" name="your-subject"/>
          </div>
          <div class="col-12" className="formLabel">
            <label for="your-message" class="form-label" >Your Message</label>
            <textarea class="form-control" id="your-message" name="your-message" rows="5" required></textarea>
          </div>
          <div class="">
            <div class="row">
              {/* <div class="col-md-6"> */}
                <button data-res="<?php echo $sum; ?>" type="submit" className="formsButton" >Send</button>
              
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  
  </div>
)};

export default Header;