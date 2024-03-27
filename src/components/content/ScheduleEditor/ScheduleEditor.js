import arrowUp from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (1).png";
import arrowDown from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (2).png";
import hamburgerMenu from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (4).png";
import operationDirection from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Screenshot 2024-03-27 at 01.49.58.png";
const ScheduleEditor = () => {
  return (
    <div className="scheduleEditorContainer">
      <div className="scheduleEditorSelectorContainer">
        <div className="scheduleEditorSelectorIndividualContainerSelected">
          <h2 className="scheduleEditorSelectorIndividualTextSelected">
            Schedule
          </h2>
        </div>
        <div className="scheduleEditorSelectorIndividualContainerUnselected">
          <h2 className="scheduleEditorSelectorIndividualTextUnselected">
            Properties
          </h2>
        </div>
        <div className="scheduleEditorSelectorIndividualContainerUnselected">
          <h2 className="scheduleEditorSelectorIndividualTextUnselected">
            Parameters
          </h2>
        </div>
        <div className="scheduleEditorSelectorIndividualContainerUnselected">
          <h2 className="scheduleEditorSelectorIndividualTextUnselected">
            Interaction
          </h2>
        </div>
      </div>
      <div className="scheduleEditorContentContainer">
        <div className="scheduleEditorIndividualOperationContainer">
          <div>
            <div className="scheduleEditorArrowsContainer">
              <img className="scheduleEditorArrowImage" src={arrowUp}></img>
              <img className="scheduleEditorArrowImage" src={arrowDown}></img>
            </div>{" "}
            <div className="scheduleEditorIndividualOperationTextContainer">
              <h2 className="scheduleEditorIndividualOperationText">
                Tranfer Plate
              </h2>
            </div>
          </div>
          <div>
            {" "}
            <img
              className="scheduleEditorHamburgerImage"
              src={hamburgerMenu}
            ></img>{" "}
          </div>
        </div>{" "}
        <div className="operationDirectionContainer">
          <img
            className="operationDirectionImage"
            src={operationDirection}
          ></img>
        </div>
        <div className="scheduleEditorIndividualOperationContainer">
          <div>
            <div className="scheduleEditorArrowsContainer">
              <img className="scheduleEditorArrowImage" src={arrowUp}></img>
              <img className="scheduleEditorArrowImage" src={arrowDown}></img>
            </div>{" "}
            <div className="scheduleEditorIndividualOperationTextContainer">
              <h2 className="scheduleEditorIndividualOperationText">
                Invoke Operation
              </h2>
            </div>
          </div>
          <div>
            {" "}
            <img
              className="scheduleEditorHamburgerImage"
              src={hamburgerMenu}
            ></img>{" "}
          </div>
        </div>{" "}
        <div className="operationDirectionContainer">
          <img
            className="operationDirectionImage"
            src={operationDirection}
          ></img>
        </div>
        <div className="scheduleEditorIndividualOperationContainer">
          <div>
            <div className="scheduleEditorArrowsContainer">
              <img className="scheduleEditorArrowImage" src={arrowUp}></img>
              <img className="scheduleEditorArrowImage" src={arrowDown}></img>
            </div>{" "}
            <div className="scheduleEditorIndividualOperationTextContainer">
              <h2 className="scheduleEditorIndividualOperationText">
                Tranfer Plate
              </h2>
            </div>
          </div>
          <div>
            {" "}
            <img
              className="scheduleEditorHamburgerImage"
              src={hamburgerMenu}
            ></img>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ScheduleEditor;
