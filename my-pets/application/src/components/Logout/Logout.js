import { useEffect } from "react";
import { auth } from "../../utils/firebase";

const Logout = ({ children }) => {
  useEffect(() => {
    auth.signOut();
  }, []);
  return children;
};

export default Logout;
