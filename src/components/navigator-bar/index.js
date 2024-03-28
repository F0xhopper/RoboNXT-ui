import penIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/New Project (3).png";
import computerIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/New Project (4).png";
const Navigator = () => {
  return (
    <div className="navigatorBar">
      <div className="navigatorContainer">
        <div className="navigatorIndividualSelectorContainerSelected">
          <img
            className="navigatorIndividualSelectorImageSelected"
            src={penIcon}
          ></img>
        </div>
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            className="navigatorIndividualSelectorImageUnselected"
            src={computerIcon}
          ></img>
        </div>
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            className="navigatorIndividualSelectorImageUnselected"
            src={computerIcon}
          ></img>
        </div>
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            className="navigatorIndividualSelectorImageUnselected"
            src={computerIcon}
          ></img>
        </div>
        <div className="navigatorIndividualSelectorContainerUnselected">
          <img
            className="navigatorIndividualSelectorImageUnselected"
            src={computerIcon}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
