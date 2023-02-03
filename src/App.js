import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import AnimateRoutes from "./components/AnimateRoutes";

function App() {
  return (
    <>
      <Header />
      <Router>
        <AnimateRoutes />
      </Router>
    </>
  );
}

export default App;
