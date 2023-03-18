import Order from "./components/Order";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

const App = () => (
  <div className="">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<Order />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>
);
export default App;
