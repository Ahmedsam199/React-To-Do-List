import React from "react";
import { Route } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import Tasks from "./tasks";
function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
  const [istok, setIsTok] = useState();
  const token = useSelector((state) => state.state);
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(_props) => {
        if (token == null) {
          history.push("/enter");
        } else {
          return <Tasks />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
