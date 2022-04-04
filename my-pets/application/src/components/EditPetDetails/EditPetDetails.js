import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as petservice from "../../services/petService";
import InputError from "../Shared/inputError/inputError";
import isAuth from "../../hoc/isAuth";

const EditPetDetails = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [pet, setPet] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    petservice.getOne(params.petId).then((res) => setPet(res));
  }, []);

  const onDescriptionSubmit = (e) => {
    e.preventDefault();

    let updatedPet = { ...pet, description: e.target.description.value };

    petservice
      .editDetails(params.petId, updatedPet)
      .then(navigate(`/pets/details/${params.petId}`));
  };

  const onDescriptionChange = (e) => {
    if (e.target.value.length < 10) {
      setErrorMessage("Description too short!");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <section className="detailsMyPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter: <i className="fas fa-heart"></i> {pet.likes}
      </p>
      <p className="img">
        <img src={pet.imageURL} />
      </p>
      <form onSubmit={onDescriptionSubmit}>
        <textarea
          type="text"
          name="description"
          onBlur={onDescriptionChange}
          defaultValue={pet.description}
        ></textarea>
        <InputError>{errorMessage}</InputError>
        <button className="button">Save</button>
      </form>
    </section>
  );
};

export default isAuth(EditPetDetails);
