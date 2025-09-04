import React, { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import { Outlet } from "react-router";
import ThemeSelector from "../componenets/Theme";
import { useSelector } from "react-redux";
import Loader from "../componenets/Loader";
import CustomCursor from "../componenets/CustomCursor";

function MainLayout() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [loading, setLoading] = useState(true);
  const [doorOpen, setDoorOpen] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  useEffect(() => {
    // Loader show 2 sec
    const timer = setTimeout(() => {
      setLoading(false);

      // Door animation start after loader ends
      setTimeout(() => {
        setDoorOpen(true);
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="dark:bg-gray-950 text-text relative overflow-hidden">
      {/* Door overlay */}
      <div
        className={`door-overlay ${doorOpen ? "door-open" : ""}`}
      ></div>

      <Navbar />
      <ThemeSelector />
      <Outlet />
      <CustomCursor />
    </div>
  );
}

export default MainLayout;
