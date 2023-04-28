import Task from "../components/Task";
import "../components/css/tasks.css"

export default function Tasks({ tasks }) {
  return (
    <div className="posts">
      {tasks.map((p) => (
        <Task key= {p._id} task={p} />
      ))}
    </div>
  );
}
