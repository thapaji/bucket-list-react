import { useState } from "react";
import { Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import { MainLayout } from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import { AddNewList } from "./pages/AddNewList";

function App() {
  const [logedInUser, setLogedInUser] = useState({});
  const [show, setShow] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<MainLayout logedInUser={logedInUser} setShow={setShow} />}>
        <Route path="/" element={<Login setLogedInUser={setLogedInUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard logedInUser={logedInUser} />} />
        <Route path="/add" element={<AddNewList logedInUser={logedInUser} />} />
      </Route>
    </Routes>
  );
}

export default App;
