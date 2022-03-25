import { Link } from "react-router-dom";

const PetElement = ({ id, name, description, imageURL, category, likes }) => {
  return (
    <li className="otherPet">
      <h3>Name: {name}</h3>
      <p>Category: {category}</p>
      <p className="img">
        <img src={imageURL} />
      </p>
      <p className="description">{description}</p>
      <div className="pet-info">
        <Link to="#">
          <button className="button">
            <span> {likes}</span>
            <i className="fas fa-heart"></i>
          </button>
        </Link>
        <Link to={`/pets/details/${id}`}>
          <button className="button">Details</button>
        </Link>
      </div>
    </li>
  );
};

export default PetElement;
