import { useState } from "react";
// Images
import penIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0000_Layer-7.png";
import storageIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0003_Layer-4.png";
import objectIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0001_Layer-6.png";
import deviceIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0004_Layer-3.png";
import eventIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0005_Layer-1.png";
import screenIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/navigator-bar-icons/Icon__0002_Layer-5.png";
/**
 * The left side navigator bar
 * A tool tip appears when hovering over each icon
 * @returns {JSX.Element}
 */
const Navigator = () => {
  // Object with navigator option names with allocated icon images allowing map rendering
  const navigatorIcons = {
    "Schedule Editor": penIcon,
    "Storage Manager": storageIcon,
    "Object Manager": objectIcon,
    "Device Manager": deviceIcon,
    "Event Viewer": eventIcon,
    Simulation: screenIcon,
  };

  const [position, setPosition] = useState({ x: 0, y: 0 }); // - Position of mouse

  const [showText, setShowText] = useState(false); // - Boolean for if the mouse is currently over an icon

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
        {Object.keys(navigatorIcons).map((iconName, index) => (
          <div
            className={
              iconName == "Schedule Editor"
                ? "navigatorIndividualSelectorContainerSelected"
                : "navigatorIndividualSelectorContainerUnselected"
            }
          >
            <img
              onMouseMove={handleMouseMove}
              onMouseEnter={() => {
                setShowText(true);
                setHoverText(iconName);
              }}
              onMouseLeave={() => setShowText(false)}
              className="navigatorIndividualSelectorImageSelected"
              src={navigatorIcons[iconName]}
            ></img>
          </div>
        ))}
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
