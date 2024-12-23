import { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import Portfolio from "./Portfolio";

export default function PortfolioLoader() {
  const [loadingState, setLoadingState] = useState<string>("loading-in");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLoadingState("loading-in");
    
    const timer1 = setTimeout(() => {
      setLoadingState("loading-out");
    }, 800);

    const timer2 = setTimeout(() => {
      setLoadingState("loading-complete");
    }, 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="relative flex w-full items-center justify-center min-[1000px]:h-full">
        <Portfolio loadingState={loadingState} />
      </div>
      <div className="noise"></div>
      {loadingState !== "loading-complete" && (
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
      )}
    </>
  );
}
