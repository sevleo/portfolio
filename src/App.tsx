import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import ErrorPage from "./components/ErrorPage";
import { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Portfolio></Portfolio>
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
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* Main router */}
      <div className="relative flex h-full w-full items-center justify-center">
        <RouterProvider router={router} />
      </div>

      {/* Noise */}
      <div className="noise"></div>

      {/* Loader effect */}
      {loadingState !== "" ? (
        <div
          className={`loading flex h-full w-full items-center justify-center ${loadingState}`}
        >
          <div className="loading__mask bg-[#141414]"></div>
          <div className="loader">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={[
                "#FFFFFF",
                "#FFFFFF",
                "#FFFFFF",
                "#FFFFFF",
                "#FFFFFF",
                "#FFFFFF",
              ]}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
