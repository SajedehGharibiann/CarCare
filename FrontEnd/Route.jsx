import { Routes, Route } from "react-router-dom";
import Home from "./src/Pages/Home";
import Register from "./src/Pages/Register";
import Services from "./src/Pages/Services";
import Dashboard from "./src/Pages/Dashboard";
import MyCars from "./src/Pages/MyCars";
import Maintenance from "./src/Pages/Maintenance";
import Reminders from "./src/Pages/Reminders";
import Profile from "./src/Pages/Profile";
import SignIn from "./src/Pages/SignIn";
import PrivateLayout from "./src/Components/PrivateLayout";
import AddVehicle from "./src/Components/AddVehicle";
import AddMaintenance from "./src/Components/AddMaintenance";
import AddReminder from "./src/Components/AddReminder";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/my-cars" element={<MyCars />}>
          <Route path="add" element={<AddVehicle />} />
        </Route>

        <Route path="/maintenance" element={<Maintenance />} >
        <Route path="add" element={<AddMaintenance/>}/>
        </Route>

        <Route path="/reminders" element={<Reminders />} >
        <Route path="add" element={<AddReminder/>}/>
        </Route>

        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
