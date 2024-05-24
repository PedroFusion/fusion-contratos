import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage.js";
import Sos from "./soslocacoes/Sos.js";
import Fusion from "./fusion/Fusion.js";
import ConfigContrato from "./configContrato/ConfigContrato.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sos" element={<Sos />} />
        <Route path="/fusion" element={<Fusion />} />
        <Route path="/config-contrato" element={<ConfigContrato />} />
      </Routes>
    </BrowserRouter>
  );
}
