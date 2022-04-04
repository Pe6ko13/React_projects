import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import PetDetails from "./components/PetDetails/PetDetails";
import EditPetDetails from "./components/EditPetDetails/EditPetDetails";
import CreatePet from "./components/CreatePet/CreatePet";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import { useEffect, useState } from "react";
import { auth } from "./utils/firebase";
import CustomErrorBoundary from "./components/CustomErrorBoundary/CustomErrorBoundary";
import AuthContext from "./contexts/AuthContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="container">
      <AuthContext.Provider value={authInfo}>
        <Header />

        <CustomErrorBoundary>
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/categories/:category" element={<Categories />} />
            <Route path="/pets/details/:petId" element={<PetDetails />} />
            <Route
              path="/pets/details/:petId/edit"
              element={<EditPetDetails />}
            />
            <Route path="/pets/create" element={<CreatePet />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/logout"
              element={
                <Logout>
                  <Categories />
                </Logout>
              }
            />
          </Routes>
        </CustomErrorBoundary>

        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
