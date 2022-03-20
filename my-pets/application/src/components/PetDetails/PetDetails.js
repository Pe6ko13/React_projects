import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as petService from "../../services/petService";

const PetDetails = () => {
  let match = useParams();
  let [pet, setPet] = useState({});

  useEffect(() => {
    petService.getOne(match.petId).then((res) => setPet(res));
  }, [match]);

  return (
    <section class="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter: {pet.likes}
        <a href="#">
          <button class="button">
            <i class="fas fa-heart"></i> Pet
          </button>
        </a>
      </p>
      <p class="img">
        <img src={pet.imageURL} />
      </p>
      <p class="description">{pet.description}</p>
    </section>
  );
};

export default PetDetails;
