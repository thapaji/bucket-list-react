import { useState } from "react";
import { Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import { MainLayout } from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
