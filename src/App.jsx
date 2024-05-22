import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import { MainLayout } from "./layout/MainLayout";
import { useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [logedInUser, setLogedInUser] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const logedInUser = sessionStorage.getItem("logedInUser");
    if (logedInUser) {
      setLogedInUser(JSON.parse(logedInUser));
    } else {
      setLogedInUser(null);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout logedInUser={logedInUser} setLogedInUser={setLogedInUser} setShow={setShow} show={show} />}
      >
        <Route path="/" element={<Login setLogedInUser={setLogedInUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard logedInUser={logedInUser} />} />
      </Route>
    </Routes>
  );
}

export default App;
