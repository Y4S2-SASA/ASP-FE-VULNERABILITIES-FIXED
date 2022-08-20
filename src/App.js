import { createContext } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PreviewSite from "./pages/preview-page";
import Items from "./pages/items";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Reservations from "./pages/reservations";
import Register from "./pages/signup";
import PrivateRoutes from "./private-routes/PrivateRoutes";
import Error404 from "./pages/error";
import AdminHome from "./pages/admin-panel";
import ReserveNow from "./pages/reservations/ReserveNow";
import MyReservations from "./pages/reservations/MyReservations";
import CreateItem from "./pages/items/CreateItem";
import CreateQuestions from "./pages/questions/create-questions/CreateQuestions";
import ListQuestions from "./pages/questions/list-questions/ListQuestions";
import ViewQuestion from "./pages/questions/view-question/ViewQuestion";

export const AuthContext = createContext();

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<PrivateRoutes />}>
          {/* add private routes here */}
          <Route path="/items" element={<Items />} />
          <Route path="/create-question" element={<CreateQuestions />} />
          <Route path="/list-questions" element={<ListQuestions />} />
          <Route path="/view-question/:id" element={<ViewQuestion />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-panel" element={<AdminHome />} />
          <Route path="/404" element={<Error404 />} />

          <Route path="/reserve/:id" element={<ReserveNow />} />
          <Route path="/my-reservations" element={<MyReservations/>}/>

          <Route path="/createitem" element={<CreateItem/>}/>
        </Route>
        {/* add public routes here */}
        <Route path="/" element={<PreviewSite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}