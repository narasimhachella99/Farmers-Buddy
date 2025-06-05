import "./App.css";
import Index from "./Components/Index";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Farmer/Register";
import FarmerHome from "./Components/Farmer/FarmerHome";
import CheckSoil from "./Components/Farmer/CheckSoil";
import PanchayathHome from "./Components/Panchayath/PanchayathHome";
import AddSoil from "./Components/Farmer/AddSoil";
import ViewSoil from "./Components/Panchayath/ViewSoil";
import AddInformation from "./Components/Panchayath/AddInformation";
import ViewQuestion from "./Components/Panchayath/ViewQuestion";
import AddAnswer from "./Components/Panchayath/AddAnswer";
import ViewSoilInfo from "./Components/Farmer/ViewSoilInfo";

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/farmerHome" element={<FarmerHome />} />
          <Route path="/checkSoil/" element={<CheckSoil />} />
          <Route path="/panchaythHome" element={<PanchayathHome />} />
          <Route path="/addSoil" element={<AddSoil />} />
          <Route path="/viewSoil" element={<ViewSoil />} />
          <Route path="/addInfo/:id" element={<AddInformation />} />
          <Route path="/addAnswer/:id" element={<AddAnswer />} />
          <Route path="/viewQuestion" element={<ViewQuestion />} />
          <Route path="/soilInfo" element={<ViewSoilInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
