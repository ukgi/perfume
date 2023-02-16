import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserName from "../pages/UserName/UserName";
import Slider from "../pages/Slider/Slider";
import { AnimatePresence } from "framer-motion";
import Gender from "../pages/Question/Gender/Gender";
import Services from "../pages/Services/Services";
import Perfums from "../pages/Question/Perfums/Perfums";
import Season from "../pages/Question/Season/Season";
import Mood from "../pages/Question/Mood/Mood";
import Styles from "../pages/Question/Styles/Styles";
import { UserContextApiProvider } from "../context/UserContextApi";
import Result from "../pages/Result/Result";
import Error from "../pages/Error/Error";
import ResultDetail from "../pages/ResultDetail/ResultDetail";

export default function AnimateRoutes() {
  const location = useLocation();
  return (
    <UserContextApiProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Slider />} />
          <Route path='/error' exact element={<Error />} />
          <Route path='/services' element={<Services />} />
          <Route path='/userName' element={<UserName />} />
          <Route path='/gender' element={<Gender />} />
          <Route path='/perfums' element={<Perfums />} />
          <Route path='/mood' element={<Mood />} />
          <Route path='/season' element={<Season />} />
          <Route path='/styles' element={<Styles />} />
          <Route path='/result' element={<Result />} />
          <Route path='/resultDetail' element={<ResultDetail />} />
        </Routes>
      </AnimatePresence>
    </UserContextApiProvider>
  );
}
