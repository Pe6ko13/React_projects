import { useContext } from "react";

import Login from "../components/Login/Login";
import AuthContext from "../contexts/AuthContext";

const isAuth = (InnerComponent) => {
  const OuterComponent = (props) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
      return <Login />;
    }

    return <InnerComponent {...props} />;
  };

  return OuterComponent;
};

export default isAuth;
