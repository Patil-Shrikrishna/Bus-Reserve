import Home from "./pages/Home";
import AvailableBus from "./pages/AvailableBus";
import PassengerDetailPage from "./pages/PassengerDetailsPage";
import Receipt from "./pages/Receipt";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<AvailableBus />} />
        <Route path="/passengerInfo" element={<PassengerDetailPage />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </div>
  );
}
export default App;
