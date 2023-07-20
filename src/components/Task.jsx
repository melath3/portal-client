import "../components/css/task.css"
import {Link} from "react-router-dom";
import {Config} from '../Config';


export default function Task({task}) {
  // const PF = "http://localhost:5000/images/";
  return (
  <div className="post">
      {task.photo && (
      <img 
      className="postImg" 
      src={`${Config.imgUrl}` + task.photo} 
      alt="" 
      />
      )}
      
   <div className="postInfo">
          <div className="postCats">
            
        
      </div>
      <Link to={`/task/${task._id}`}>
      <span className="postTitle">{task.title} </span>

      </Link>
      <p className="postDesc">
    {task.desc}
        </p>
      <hr />
      <span className="postDate">{new Date(task.createdAt).toDateString()}</span>
  </div>
   
    
  </div>
  );
}
