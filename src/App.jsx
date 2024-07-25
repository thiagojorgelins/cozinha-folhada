import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Cardapio } from "./pages/Cardapio";
import { PratosEstacao } from "./pages/PratosEstacao";
import { Espaco } from "./pages/Espaco";
import { FAQ } from "./pages/FAQ";
import { Sobre } from "./pages/Sobre";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/pratosdaestacao" element={<PratosEstacao />} />
        <Route path="/espaco" element={<Espaco />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
