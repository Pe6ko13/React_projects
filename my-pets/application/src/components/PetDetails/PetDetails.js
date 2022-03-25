import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as petService from "../../services/petService";

const PetDetails = () => {
  let match = useParams();
  let [pet, setPet] = useState({});

  useEffect(() => {
    petService.getOne(match.petId).then((res) => setPet(res));
  }, [match]);

  const onLikeButtonClick = () => {
    let incrementedLikes = Number(pet.likes) + 1;
    petService.pet(match.petId, incrementedLikes).then(() => {
      setPet((state) => ({ ...state, likes: incrementedLikes }));
    });
  };

  return (
    <section className="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>
        <button className="button" onClick={onLikeButtonClick}>
          <span>{pet.likes}</span>
          <i className="fas fa-heart"></i>
        </button>
      </p>
      <p className="img">
        <img src={pet.imageURL} />
      </p>
      <p className="description">{pet.description}</p>
      <div className="pet-info">
        <Link to={`/pets/details/${pet.id}/edit`}>
          <button className="button">Edit</button>
        </Link>
        <Link to="#">
          <button className="button">Delete</button>
        </Link>
      </div>
    </section>
  );
};

export default PetDetails;
