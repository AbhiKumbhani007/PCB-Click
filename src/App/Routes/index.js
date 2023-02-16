import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../Pages/Login"
// import Login from "../Pages/Login/Login"
import GaurdedRoute from "./GaurdedRoute/GaurdedRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";

export default function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <GaurdedRoute>
                <Dashboard />
              </GaurdedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
