import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import AnimateRoutes from "./components/AnimateRoutes";
import { KakaoLoginUserContextApiProvider } from "./context/KakaoLoginUserContextApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <KakaoLoginUserContextApiProvider>
          <Router>
            <Header />
            <AnimateRoutes />
          </Router>
        </KakaoLoginUserContextApiProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
