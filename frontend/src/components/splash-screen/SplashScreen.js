import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function showSplashScreen() {
      try {
        // await auth0Client.loadSession();
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    showSplashScreen();
    return () => {
      // cleanup
    };
  });

  return <div>{!loading ? children : LoadingMessage()}</div>;
}

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Loading APP....
      <div className="loading-dot">.</div>
    </div>
  );
}
