import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Private_Routes } from "./Private_Routes";
import { Public_Routes } from "./Public_Routes";
import { Signup } from "../pages/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Private_Routes />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="" element={<Public_Routes />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
