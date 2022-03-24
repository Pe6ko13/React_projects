import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as petservice from "../../services/petService";
import InputError from "../Shared/inputError/inputError";

const EditPetDetails = () => {
  let params = useParams();
  const [pet, setPet] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    petservice.getOne(params.petId).then((res) => setPet(res));
  }, []);

  const onDescriptionEdit = (e) => {
    e.preventDefault();
    console.log(e.target.description.value);
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
      <form onSubmit={onDescriptionEdit}>
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

export default EditPetDetails;
