import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as petservice from "../../services/petService";

const EditPetDetails = () => {
  let params = useParams();
  const [pet, setPet] = useState({});

  useEffect(() => {
    petservice.getOne(params.petId).then((res) => setPet(res));
  }, []);

  const onDescriptionEdit = (e) => {
    e.preventDefault();
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
          defaultValue={pet.description}
        ></textarea>
        <button className="button">Save</button>
      </form>
    </section>
  );
};

export default EditPetDetails;
