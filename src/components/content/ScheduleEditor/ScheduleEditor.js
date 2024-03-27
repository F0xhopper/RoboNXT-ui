import arrowUp from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (1).png";
import arrowDown from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (2).png";
import hamburgerMenu from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (4).png";
import deviceOpertion from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Operation Icons/device-operation_hu164f4cf50c5bcef6c4ad218f9fba70e0_1251_500x0_resize_box_2 (1).png";
import tranferIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Operation Icons/transfer_hu5097c406b98ce7a80b354094a20bfc66_1302_7.png";
import breakLoopIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Operation Icons/break-loop_huec7716100118b8b4e150cb4139ff973e_987_ (1).png";
import startNextThreadIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Operation Icons/start-next-thread_hu51ed62eab1cfb239e1765cd4773aa3 (1).png";
import operationDirection from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Screenshot 2024-03-27 at 01.49.58.png";

const ScheduleEditor = (props) => {
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
        {props.schedules
          .find((schedule) => {
            return schedule.name === props.currentlyOpenSchedules;
          })
          .operations.map((operation, index) => (
            <div>
              <div className="scheduleEditorIndividualOperationContainer">
                <div>
                  <div className="scheduleEditorArrowsContainer">
                    <img
                      className="scheduleEditorArrowImage"
                      src={arrowUp}
                    ></img>
                    <img
                      className="scheduleEditorArrowImage"
                      src={arrowDown}
                    ></img>
                  </div>{" "}
                  <div className="scheduleEditorIndividualOperationTextContainer">
                    <h2 className="scheduleEditorIndividualOperationText">
                      {operation.operation}
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
              {index ==
              props.schedules.find((schedule) => {
                return schedule.name === props.currentlyOpenSchedules;
              }).operations.length -
                1 ? (
                <div className="operationCreateButtonContainer">
                  <h2 className="operationCreateButtonText">+</h2>
                </div>
              ) : (
                <div className="operationDirectionContainer">
                  <img
                    className="operationDirectionImage"
                    src={operationDirection}
                  ></img>
                </div>
              )}
            </div>
          ))}
        <div className="scheduleEditorCreateOptionsContainer">
          <h2 className="scheduleEditorCreateOptionsText">Choose Operation</h2>
          <div className="scheduleEditorCreateOptionsInnerContainer">
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={tranferIcon}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={deviceOpertion}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={breakLoopIcon}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={startNextThreadIcon}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={tranferIcon}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={deviceOpertion}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={breakLoopIcon}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={startNextThreadIcon}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={tranferIcon}
              ></img>
            </div>{" "}
            <div className="scheduleEditorCreateOptionsIndividualContainer">
              <img
                className="scheduleEditorCreateOptionsIndividualImage"
                src={deviceOpertion}
              ></img>
            </div>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ScheduleEditor;
