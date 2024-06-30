import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import ErrorPage from "./components/ErrorPage";
import { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";

function App() {
  const [loadingState, setLoadingState] = useState<string>("loading-in");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Portfolio loadingState={loadingState}></Portfolio>
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
          <Portfolio loadingState={loadingState}></Portfolio>
        </>
      ),
    },
  ]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoadingState("loading-out");
    }, 500);

    const timer2 = setTimeout(() => {
      setLoadingState("loading-complete");
    }, 1000);

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
      {loadingState !== "loading-complete" ? (
        <div
          className={`loading flex h-full w-full items-center justify-center ${loadingState}`}
        >
          <div className="loading__mask bg-globalBackground"></div>
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
            <p>loading...</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
