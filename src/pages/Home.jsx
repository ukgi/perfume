import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Home() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Outlet location={location} key={location.pathname} />
    </>
  );
}
