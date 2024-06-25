import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ErrorPage from "./components/ErrorPage";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

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

  const [loadingState, setLoadingState] = useState("loading-in");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoadingState("loading-out");
    }, 1500);

    const timer2 = setTimeout(() => {
      setLoadingState("");
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div
        className={`loading flex h-full w-full items-center justify-center ${loadingState}`}
      >
        <div className="loading__mask bg-yellow-400"></div>
        <div className="loader">
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="noise"></div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
