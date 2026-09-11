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

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateLayout>
            <Home />
          </PrivateLayout>
        }
      />
      <Route
        path="/signin"
        element={
          <PrivateLayout>
            <SignIn />
          </PrivateLayout>
        }
      />
      <Route
        path="/register"
        element={
          <PrivateLayout>
            <Register />
          </PrivateLayout>
        }
      />
      <Route
        path="/services"
        element={
          <PrivateLayout>
            <Services />
          </PrivateLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateLayout>
            <Dashboard />
          </PrivateLayout>
        }
      />
      <Route
        path="/my-cars"
        element={
          <PrivateLayout>
            <MyCars />
          </PrivateLayout>
        }
      />
      <Route
        path="/maintenance"
        element={
          <PrivateLayout>
            <Maintenance />
          </PrivateLayout>
        }
      />
      <Route
        path="/reminders"
        element={
          <PrivateLayout>
            <Reminders />
          </PrivateLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateLayout>
            <Profile />
          </PrivateLayout>
        }
      />
    </Routes>
  );
}
