import { createContext } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PreviewSite from "./pages/preview-page";
import Items from "./pages/items";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Questions from "./pages/questions";
import Reservations from "./pages/reservations";
import Signup from "./pages/signup";
import PrivateRoutes from "./private-routes/PrivateRoutes";

export const AuthContext = createContext();

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<PrivateRoutes />}>
          {/* add private routes here */}
          <Route path="/items" element={<Items />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* add public routes here */}
        <Route path="/" element={<PreviewSite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}