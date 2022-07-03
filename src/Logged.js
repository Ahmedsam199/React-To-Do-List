import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";
const Logged = () => {
  const token2 = useSelector((state) => state);
  const history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:4200/test", {
      headers: { Authorization: `Bearer ${token2.state}` },
    });
  });
  return (
    <div className="logged">
      Test
      <h5>{token2.state}</h5>
      <button
        onClick={() => {
          history.push("/enter");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logged;
