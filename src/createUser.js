import axios from "axios";
import {useRef} from 'react'
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CreateUser = () => {
    const User=useRef()
    const history=useHistory()
      const dispatch = useDispatch();
      const token2 = useSelector((state) => state);
      console.log(token2);

      const user = useRef();
      const [token, setToken] = useState("");
const Create=() =>{
axios.post("http://localhost:8000/api/newuser" , {
        User: User.current.value
      })
      .then((res) => {
           axios
             .post("http://localhost:4200/login", {
               username: User.current.value,
               id:res.data.id
             })
             .then((res) => {
               console.log(res.data.accessToken);
               setToken(res.data.accessToken);
               dispatch({ type: "add", payload: `${token}` });
               console.log(token2.value);
             });
        console.log(res);
        history.push('/pro');
      })
      .catch((err) => {
        console.log(err);
      });

}
    return ( 
        <div className="bg">
            Enter Your UserName
            <input type="text" className="form-control w-50" ref={User} placeholder="UserName" />
            <button className="btn btn-dark" onClick={Create}>Create Account</button>
        </div>
    );
}
 
export default CreateUser;