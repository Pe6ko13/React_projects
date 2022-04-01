import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header id="site-header">
      <nav className="navbar">
        {user ? (
          <section className="navbar-dashboard">
            <div className="first-bar">
              <Link to="/">Dashboard</Link>
              <Link className="button" to="#">
                My Pets
              </Link>
              <Link className="button" to="/pets/create">
                Add Pet
              </Link>
            </div>
            <div className="second-bar">
              <ul>
                <li>Welcome, {user.email}</li>

                <li>
                  <Link to="/logout">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        ) : (
          <section className="navbar-anonymous">
            <ul>
              <li>
                <Link to="/register">
                  <i className="fas fa-user-plus"></i> Register
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
            </ul>
          </section>
        )}
      </nav>
      <style>
        {`
          nav.navbar {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            align-self: center;
            letter-spacing: 0.05rem;
            background: #234465;
            padding: 0.8rem 1rem;
            color: white;
          }

          #site-header > nav > section.navbar-dashboard > a {
            list-style: none;
            text-decoration: none;
            align-self: center;
            font-weight: bold;
            font-size: 1.5rem;
            color: white;
          }

          #site-header
            > nav
            > section.navbar-dashboard
            > form
            > input[type="text"],
          #site-header
            > nav
            > section.navbar-anonymous
            > ul
            > li:nth-child(1)
            > a,
          #site-header > nav > section.navbar-user > ul > li:nth-child(1),
          #site-header
            > nav
            > section.navbar-dashboard
            > ul
            > li:nth-child(1)
            > a {
            margin-right: 0.5rem;
          }

          nav.navbar ul {
            background: transparent;
            padding: 0.5rem;
            border-radius: 0.3rem;
            margin: 0;
          }
          nav.navbar ul li {
            display: block;
            list-style: none outside;
            position: relative;
          }
          nav.navbar ul li a {
            display: block;
            padding: 0.4rem 0.8rem;
            border-radius: 0.4rem;
            text-decoration: none;
            font-weight: bold;
            background: cadetblue;
            color: rgb(255, 255, 255);
          }
          .button:hover,
          nav.navbar ul li a:hover,
          nav.navbar ul li:hover > a {
            background: rgb(248, 215, 107);
            color: rgb(0, 0, 0);
            font-weight: bold;
          }
          .dashboard nav {
            background: transparent;
          }
          .navbar-dashboard {
            display: flex;
            justify-content: space-between;
            width: 100vw;
          }
          .navbar .first-bar {
            display: flex;
            align-items: center;
          }
          .navbar .first-bar a {
            color: white;
            margin-right: 0.5rem;
          }
          .navbar .first-bar input {
            margin-right: 0.5rem;
          }
          #site-header > nav > section > div.first-bar > a:nth-child(1) {
            font-weight: bold;
            font-size: 1.5rem;
          }
          .navbar .first-bar form {
            display: flex;
            align-items: center;
          }
          .navbar .second-bar ul {
            display: flex;
            align-items: center;
          }
          .navbar .second-bar ul li {
            margin-right: 0.5rem;
          }
          .navbar-anonymous ul {
            display: flex;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
