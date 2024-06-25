import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ErrorPage from "./components/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home></Home>
        </>
      ),
      errorElement: (
        <>
          <ErrorPage></ErrorPage>
        </>
      ),
    },
    {
      path: "/software-engineer",
      element: (
        <>
          <Portfolio></Portfolio>
        </>
      ),
    },
  ]);

  return (
    <>
      <div className="noise"></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
