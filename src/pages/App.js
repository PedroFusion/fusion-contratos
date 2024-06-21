import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage.js";
import Sos from "./soslocacoes/Sos.js";
import Fusion from "./fusion/Fusion.js";
import ConfigContrato from "./configContrato/ConfigContrato.js";
import LastReview from "./lastReviewContract/LastReview.js";
import Download from "./downloadContrato/Download.js";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/download" element={<Download />} />
        <Route path="/sos" element={<Sos />} />
        <Route path="/fusion" element={<Fusion />} />
        <Route path="/config-contrato" element={<ConfigContrato />} />
        <Route path="/last-review" element={<LastReview />} />

      </Routes>
    </BrowserRouter>
  );
}
