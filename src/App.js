import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Slider from "./components/Slider/Slider";
import Home from "./pages/Home";
import UserName from "./pages/UserName/UserName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>not found</div>,
    children: [
      {
        index: true,
        element: <Slider />,
      },
      {
        path: "userName",
        element: <UserName />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
