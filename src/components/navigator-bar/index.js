import penIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0000_Layer-7.png";
import storageIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0003_Layer-4.png";
import objectIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0001_Layer-6.png";
import deviceIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0004_Layer-3.png";
import eventIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0005_Layer-1.png";
import screenIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0002_Layer-5.png";
import { useState } from "react";
/**
 * The left side navigator bar
 * A tool tip appears when hovering over each icon
 * @returns {JSX.Element}
 */

const Navigator = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // - Position of mouse

  const [showText, setShowText] = useState(false); // - Boolean for if the mouse is currently over an icon triggering to show text

  const [hoverText, setHoverText] = useState(); //  -  The text that is displayed on hover
/**
 * Sets the postion variable to the current mouse position
 * Is called when mouse has entered icon
 * 
 * @param {*} event - provides mouse position
 */
  function handleMouseMove(event) {
    setPosition({ x: event.clientX - 4, y: event.clientY - 50 });
  }

  return (
    <div className="navigatorBar">
      <div className="navigatorContainer">
        <div className="navigatorIndividualSelectorContainerSelected">
          <img
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setShowText(true);
              setHoverText("Schedule Editor");
            }}
            onMouseLeave={() => setShowText(false)}
            className="navigatorIndividualSelectorImageSelected"
            src={penIcon}
          ></img>
        </div>
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setShowText(true);
              setHoverText("Storage Manager");
            }}
            onMouseLeave={() => setShowText(false)}
            className="navigatorIndividualSelectorImageUnselected"
            src={storageIcon}
          ></img>
        </div>
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setShowText(true);
              setHoverText("Object Manager");
            }}
            onMouseLeave={() => setShowText(false)}
            className="navigatorIndividualSelectorImageUnselected"
            src={objectIcon}
          ></img>
        </div>
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setShowText(true);
              setHoverText("Device Manager");
            }}
            onMouseLeave={() => setShowText(false)}
            className="navigatorIndividualSelectorImageUnselected"
            src={deviceIcon}
          ></img>
        </div>
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setShowText(true);
              setHoverText("Event Viewer");
            }}
            onMouseLeave={() => setShowText(false)}
            className="navigatorIndividualSelectorImageUnselected"
            src={eventIcon}
          ></img>
        </div>{" "}
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setShowText(true);
              setHoverText("Simulation");
            }}
            onMouseLeave={() => setShowText(false)}
            className="navigatorIndividualSelectorImageUnselected"
            src={screenIcon}
          ></img>
        </div>
      </div>
      {showText && (
        <div
          className="hoverText"
          style={{ left: position.x, top: position.y }}
        >
          {hoverText}
        </div>
      )}
    </div>
  );
};

export default Navigator;
