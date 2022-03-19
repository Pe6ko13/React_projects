import { Route, Routes } from "react-router-dom";

import "./App.css";

import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories/:category" element={<Categories />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
