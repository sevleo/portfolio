import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import PortfolioLoader from "./components/PortfolioLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/portfolio",
      element: <PortfolioLoader />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
