import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cardapio } from "./pages/Cardapio";
import { PratosEstacao } from "./pages/PratosEstacao";
import { Espaco } from "./pages/Espaco";
import { FAQ } from "./pages/FAQ";
import { Sobre } from "./pages/Sobre";
import { Home } from "./pages/Home/Home";
import { CAlert } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/pratosdaestacao" element={<PratosEstacao />} />
          <Route path="/espaco" element={<Espaco />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
