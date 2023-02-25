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
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import OAuth2RedirectHandeler from "../pages/Login/OAuth2RedirectHandeler";
import ShowGiftBox from "../pages/ShowGiftBox/ShowGiftBox";
import Result from "../pages/Result/Result";
import ResultDetail from "../pages/ResultDetail/ResultDetail";

export default function AnimateRoutes() {
  const location = useLocation();
  return (
    <UserContextApiProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Slider />} />
          <Route path='/error' exact element={<Error />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/userName' exact element={<UserName />} />
          <Route path='/gender' exact element={<Gender />} />
          <Route path='/perfums' exact element={<Perfums />} />
          <Route path='/mood' exact element={<Mood />} />
          <Route path='/season' exact element={<Season />} />
          <Route path='/styles' exact element={<Styles />} />
          <Route path='/showGiftBox' exact element={<ShowGiftBox />} />
          <Route path='/result' exact element={<Result />} />
          <Route path='/result/:perfumeId' exact element={<ResultDetail />} />
          <Route path='/login' exact element={<Login />} />
          <Route
            path='/oauth/kakao/callback'
            exact
            element={<OAuth2RedirectHandeler />}
          />
        </Routes>
      </AnimatePresence>
    </UserContextApiProvider>
  );
}
