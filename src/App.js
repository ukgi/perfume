import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import AnimateRoutes from "./components/AnimateRoutes";
import { KakaoLoginUserContextApiProvider } from "./context/KakaoLoginUserContextApi";

function App() {
  return (
    <>
      <KakaoLoginUserContextApiProvider>
        <Router>
          <Header />
          <AnimateRoutes />
        </Router>
      </KakaoLoginUserContextApiProvider>
    </>
  );
}

export default App;
