import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";

const Register = () => {
  const navigate = useNavigate();

  const onRegisterSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    auth
      .createUserWithEmailAndPassword(username, password)
      .then(() => navigate("/categories"))
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  return (
    <section className="register">
      <form onSubmit={onRegisterSubmit}>
        <fieldset>
          <legend>Register</legend>
          <p className="field">
            <label htmlFor="username">Username</label>
            <span className="input">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <span className="actions"></span>
              <i className="fas fa-user"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <input className="button submit" type="submit" value="Register" />
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
