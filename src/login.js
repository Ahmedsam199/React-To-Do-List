import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    const user = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const token2 = useSelector((state) => state);
    const store3=useSelector((state2)=>state2)
    
     const [token, setToken] = useState("");
    
  const sign = () => {
    axios
      .post("http://localhost:8000/api/userlogin", {
        User: user.current.value,
      })
      .then((res) => {
       axios
         .post(
           "http://localhost:8000/login",
           {
             username: user.current.value,
             id: res.data.id,
           },
           
         )
         .then((res) => {
           //  setToken(res.data.accessToken);
           dispatch({ type: "add", payload: `${res.data.accessToken}` });
         
         });
         history.push("/task");
      });
  };
  return (
    <div className="bg">
      {" "}
      <div
        className="container"
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "400px",
        }}
      >
        <input type="text" ref={user} className="form-control w-50" />
        <button className="btn btn-dark" onClick={sign}>
          Sign IN
        </button>
        <Link className="btn btn-primary" to="/create">
          Dont have an account?
        </Link>
   
      </div>
    </div>
  );
};

export default Login;
