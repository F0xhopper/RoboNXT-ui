// Image
import toolBar from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/header-bar/header-tools.png";
/**
 * The unfunctional header tool bar
 * @returns {JSX.Element}
 */
const ToolBar = () => {
  return (
    <div className="toolBarContainer">
      <img className="toolBarImage" src={toolBar}></img>
    </div>
  );
};

export default ToolBar;
