import { Route, Routes } from "react-router-dom";

import "./App.css";

import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PetDetails from "./components/PetDetails/PetDetails";
import EditPetDetails from "./components/EditPetDetails/EditPetDetails";
import CreatePet from "./components/CreatePet/CreatePet";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/pets/details/:petId" element={<PetDetails />} />
        <Route path="/pets/details/:petId/edit" element={<EditPetDetails />} />
        <Route path="/pets/create" element={<CreatePet />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
