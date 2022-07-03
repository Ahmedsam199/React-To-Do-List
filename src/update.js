import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button, Modal, FormControl } from "react-bootstrap";
import { useRef } from "react";
import { useParams } from "react-router-dom";
const Update = () => {
    let { id } = useParams();
    const dd = useRef();
    const taskn = useRef();
    let history = useHistory();
    const shoot = () => {
        
        
        
        const newtask = taskn.current.value;
        
        axios
          .put(`http://localhost:8000/api/edit/${id}`, {
            id: id,
            task: newtask,
          })
          .then((res) => {
            console.log(res);
            history.push("/task");
          })
          .catch((err) => {
            console.log(err);
          });
    };
  return (
    <div className="bg">
      Task To be Changed
      <input type="text" ref={taskn} name="" id="" />
      <button className="btn btn-dark" onClick={shoot}>
        Update
      </button>
      <Link to="/task" className="btn btn-dark">
        {" "}
        Return The Tasks
      </Link>
    </div>
  );
};

export default Update;
