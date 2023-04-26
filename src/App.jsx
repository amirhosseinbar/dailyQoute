import Time from "./pages/Time";
import Hadis from "./pages/Hadis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import DailyQoute from "./pages/DailyQoute";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/time" element={<Time />} />
          <Route path="/hadis" element={<Hadis />} />
          <Route path="/time" element={<Time />} />
          <Route path="/" element={<DailyQoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
