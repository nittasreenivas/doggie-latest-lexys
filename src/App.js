import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Pokemon from "./Components/Pokemon";
import Signin from "./Components/Signin";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokiDescription from "./Components/PokiDescription";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<PokiDescription />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
