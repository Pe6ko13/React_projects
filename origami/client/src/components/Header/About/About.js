import "./About.css";
import { useParams } from "react-router-dom";

const About = () => {
  let params = useParams();
  return (
    <main className="main-about-container">
      <h1>About {params.name} page</h1>;
    </main>
  );
};

export default About;
