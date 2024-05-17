"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

import { useEffect, useState } from "react";
const TopUpBtn = () => {
  const [visible, setVisible] = useState(false);
  const handleTopUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={handleTopUp}
        style={{
          color: "white",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
        type="button"
        className="text-white bg-blue-700/70 hover:bg-blue-800/70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default TopUpBtn;
