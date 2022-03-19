import { Component } from "react";

import PetElement from "../PetElement/PetElement";
import CatNavigation from "./CatNavigation/CatNavigation";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
    };
  }

  componentDidMount() {
    fetch(" http://localhost:5000/pets")
      .then((res) => res.json())
      .then((res) => this.setState({ pets: res }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section className="dashboard">
        <h1>Dashboard</h1>

        <CatNavigation />

        <ul className="other-pets-list">
          {this.state.pets.map((x) => (
            <PetElement key={x.id} {...x} />
          ))}
        </ul>
      </section>
    );
  }
}

export default Categories;
