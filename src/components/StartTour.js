import React from "react";
import { Link } from "react-router-dom";
import Joyride from "react-joyride";
// import { GuideIcon } from "../assets/icons";
import { useState } from "react";
import { LightTooltip } from "./LightTooltip";
const StartTour = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const steps = [
    {
      target: ".app-sidebar-link:nth-child(1)",
      content:
        "Access the dashboard to view critical information and insights.",
      disableBeacon: true,
    },
    {
      target: ".app-sidebar-link:nth-child(2)",
      content:
        "Explore the reports section for in-depth analysis and data summaries.",
    },

    {
      target: ".app-sidebar-link:nth-child(3)",
      content:
        "Stay organized by accessing your schedule in the Schedule section.",
    },
    {
      target: ".menu__cta:nth-child(1)",
      content: "Add a registered payment to your account with a single click.",
    },
    {
      target: ".menu__cta:nth-child(2)",
      content: "Add a new registration  to enhance your account functionality.",
    },
    {
      target: ".menu__cta:nth-child(3)",
      content: "Add a payment to your records with our user-friendly system.",
    },
    {
      target: ".menu__cta:nth-child(4)",
      content: "Add a new package to extend the capabilities of your account.",
    },
    {
      target: ".menu__cta:nth-child(5)",
      content: "Add a new person to your records using our intuitive system.",
    },
  ];

  const joyrideStyles = {
    options: {
      primaryColor: "var( --primary-btn-color)",
    },
    buttonClose: {
      display: "none",
    },
  };
  return (
    <LightTooltip title="Start Tour " placement="top">
      <div
        className="w-[60px] h-[60px] 
     p-5 flex justify-center items-center fixed bottom-4 right-4 cursor-pointer bg-white border-2 border-white rounded-full backdrop-filter backdrop-blur-md border-opacity-100 shadow-md z-50"
      >
  
        <Link onClick={() => setIsTourOpen(true)} className={"startTour__icon"}>
          {/* <GuideIcon /> */}x
        </Link>
        {/* <GuideIcon/> */}x
        <Joyride
          steps={steps}
          run={isTourOpen}
          disableScrolling
          continuous={true}
          showProgress={true}
          styles={joyrideStyles}
          callback={(data) => {
            if (data.status === "finished" || data.status === "skipped") {
              setIsTourOpen(false);
            }
          }}
        />
      </div>
    </LightTooltip>
  );
};

export default StartTour;
