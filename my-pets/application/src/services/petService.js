const url = "http://localhost:5000/pets";

export const getAll = (category = "") => {
  let petUrl =
    url + (category && category != "all" ? `?category=${category}` : "");

  return fetch(petUrl)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getOne = (petId) => {
  return fetch(`${url}/${petId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const createPet = (petName, description, imageURL, category) => {
  let pet = {
    name: petName,
    description,
    imageURL,
    category,
    likes: 0,
  };

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet),
  });
};

export const editDetails = (petId, pet) => {
  return fetch(`${url}/${petId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pet),
  });
};

export const pet = (petId, likes) => {
  return fetch(`${url}/${petId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes }),
  }).then((res) => res.json());
};
