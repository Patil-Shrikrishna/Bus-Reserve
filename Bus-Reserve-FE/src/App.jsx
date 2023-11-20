import Home from "./pages/Home";
import AvailableBus from "./pages/AvailableBus";
import PassengerInfo from "./pages/PassengerInfo";
import Receipt from "./pages/Receipt";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<AvailableBus />} />
        <Route path="/passengerInfo" element={<PassengerInfo />} />
        <Route path="/receipt" element={<Receipt />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
export default App;
