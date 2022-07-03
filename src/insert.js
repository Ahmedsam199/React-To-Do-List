import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Modal, FormControl } from "react-bootstrap";
import { useRef,useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
const Insert = () => {
  const [token,setToken]=useState("")
  const history=useHistory()
  const [ID, setID] = useState("");
  const val = useRef();
  const val2 = useRef();
   const token2 = useSelector((state) => state);
  const dispatch=useDispatch()
  console.log(token2.state);
    const config = {
      headers: {
        authorization: `Bearer ${token2.state}`,
      },
    };
     const bodyParameters = {
       key: "value",
     };
       axios
        .post("http://localhost:8000/test", bodyParameters, config)
        .then((res2) => {
          setID(res2.data.id);
        })
  const shoot = () => {
   const newtask = val.current.value;
   axios
     .post("http://localhost:8000/api/new", {
       task: newtask,
       UserID: ID,
       body:val2.current.value
     })
     .then((res) => {
       console.log(res);
       history.push('/task')
     })
     .then((res2) => {})
     .catch((err) => {
       console.log(err);
     });
       };

  return (
    <div className="bg">
      <center>
        <div className="container">
          <div className="insee">
            <input
              type="text"
              className="test"
              style={{ padding: "7px", borderradius: "25px" }}
              name=""
              ref={val}
              id=""
            />
            <input
              type="text"
              className="test"
              style={{ padding: "7px", borderradius: "25px" }}
              name=""
              ref={val2}
              id=""
            />
            <div className="insertb">
              <button
                style={{
                  marginleft: "300px",
                  display: "flex",
                  position: "absolute",
                }}
                className="btn btn-dark"
                onClick={shoot}
              >
                Add
              </button>
              <div
                className="id"
                style={{
                  marginleft: "400px",
                  display: "flex",
                }}
              >
                <Link to="/task" className="btn btn-dark">
                  {" "}
                  See My Tasks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Insert;
