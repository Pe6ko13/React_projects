import { Component } from "react";
import { useParams } from "react-router-dom";

import * as petService from "../../services/petService";
import PetElement from "../PetElement/PetElement";
import CatNavigation from "./CatNavigation/CatNavigation";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      currentCategory: "all",
    };
  }

  componentDidMount() {
    petService.getAll().then((res) => this.setState({ pets: res }));
  }

  componentDidUpdate(prevProps) {
    let category = this.props.params.category;
    if (prevProps.params.category == category) {
      return;
    }
    petService.getAll(category).then((res) =>
      this.setState({
        pets: res,
        currentCategory: category,
      })
    );
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

export default (props) => <Categories {...props} params={useParams()} />;
