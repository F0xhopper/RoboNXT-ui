import ScheduleEditorHeader from "./Header";
import CreateOperaiton from "./CreateOperation";
import arrowUp from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (1).png";
import arrowDown from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (2).png";
import hamburgerMenu from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/4626306 (4).png";

import operationDirection from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Screenshot 2024-03-27 at 01.49.58.png";
import { useState, useEffect } from "react";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import ScheduleSelector from "./ScheduleSelector";

const ScheduleEditor = (props) => {
  const [openOperation, setOpenOperation] = useState();
  const [creatingNewOperation, setCreatingNewOperation] = useState(false);
  function createOperation(event) {
    const indexOfSchedule = props.schedules.findIndex(
      (x) => x.name === props.currentlyOpenSchedules
    );
    setOpenOperation(
      props.schedules.find((schedule) => {
        return schedule.name === props.currentlyOpenSchedules;
      }).operations.length
    );
    props.setSchedules((prevSchedules) => {
      let updatedSchedules = [...prevSchedules];
      updatedSchedules[indexOfSchedule] = {
        ...updatedSchedules[indexOfSchedule],
        operations: [
          ...updatedSchedules[indexOfSchedule].operations,
          { operation: event.target.id },
        ],
      };
      return updatedSchedules;
    });
    setCreatingNewOperation(false);
  }
  function deleteOperation(e, event) {
    const indexOfSchedule = props.schedules.findIndex(
      (x) => x.name === props.currentlyOpenSchedules
    );
    let filteredOperations = props.schedules.find((schedule) => {
      return schedule.name === props.currentlyOpenSchedules;
    }).operations;

    filteredOperations.splice(event, 1);
    props.setSchedules((prevSchedules) => {
      let updatedSchedules = [...prevSchedules];
      updatedSchedules[indexOfSchedule] = {
        ...updatedSchedules[indexOfSchedule],
        operations: filteredOperations,
      };
      return updatedSchedules;
    });
    setOpenOperation();
  }
  function moveOperation(e, event) {
    const indexOfSchedule = props.schedules.findIndex(
      (x) => x.name === props.currentlyOpenSchedules
    );
    setOpenOperation();
    if (e.target.id == "arrowUp") {
      let filteredOperations = props.schedules.find((schedule) => {
        return schedule.name === props.currentlyOpenSchedules;
      }).operations;
      filteredOperations.splice(
        event - 1,
        0,
        props.schedules.find((schedule) => {
          return schedule.name === props.currentlyOpenSchedules;
        }).operations[event]
      );
      filteredOperations.splice(event + 1, 1);
      props.setSchedules((prevSchedules) => {
        let updatedSchedules = [...prevSchedules];
        updatedSchedules[indexOfSchedule] = {
          ...updatedSchedules[indexOfSchedule],
          operations: filteredOperations,
        };
        return updatedSchedules;
      });
    } else {
      let filteredOperations = props.schedules.find((schedule) => {
        return schedule.name === props.currentlyOpenSchedules;
      }).operations;
      filteredOperations.splice(
        event + 2,
        0,
        props.schedules.find((schedule) => {
          return schedule.name === props.currentlyOpenSchedules;
        }).operations[event]
      );
      filteredOperations.splice(event, 1);
      props.setSchedules((prevSchedules) => {
        let updatedSchedules = [...prevSchedules];
        updatedSchedules[indexOfSchedule] = {
          ...updatedSchedules[indexOfSchedule],
          operations: filteredOperations,
        };
        return updatedSchedules;
      });
    }
  }
  function openOperationFunction(index) {
    if (openOperation !== index) {
      setOpenOperation(index);
    } else setOpenOperation();
  }
  useEffect(() => {
    setOpenOperation();
    setCreatingNewOperation(false);
  }, [props.currentlyOpenSchedules]);
  return (
    <div className="scheduleEditor">
      <ScheduleSelector
        schedules={props.schedules}
        setSchedules={props.setSchedules}
        setCurrentlyOpenSchedules={props.setCurrentlyOpenSchedules}
        currentlyOpenSchedules={props.currentlyOpenSchedules}
      />
      <div className="openScheduleEditorContainer">
        <ScheduleEditorHeader />
        <div className="scheduleEditorContentContainer">
          {props.schedules
            .find((schedule) => {
              return schedule.name === props.currentlyOpenSchedules;
            })
            .operations.map((operation, index) => (
              <div>
                <div className="scheduleEditorIndividualOperationContainer">
                  <div className="scheduleEditorIndividualOperationTopContainer">
                    <div>
                      <div className="scheduleEditorArrowsContainer">
                        <img
                          id="arrowUp"
                          onClick={(e) => moveOperation(e, index)}
                          className="scheduleEditorArrowImage"
                          src={arrowUp}
                        ></img>
                        <img
                          id="arrowDown"
                          onClick={(e) => moveOperation(e, index)}
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
                    <div onClick={() => openOperationFunction(index)}>
                      {" "}
                      <img
                        className="scheduleEditorHamburgerImage"
                        src={hamburgerMenu}
                      ></img>{" "}
                    </div>
                  </div>
                  {openOperation == index ? (
                    <div className="scheduleEditorIndividualOperationDropdownContainer">
                      <div className="scheduleEditorIndividualOperationDropdownOptionContainer">
                        {" "}
                        <h2 className="scheduleEditorIndividualOperationDropdownOptionText">
                          Option 1
                        </h2>
                        <input className="scheduleEditorIndividualOperationDropdownOptionInput"></input>
                      </div>
                      <div className="scheduleEditorIndividualOperationDropdownOptionContainer">
                        {" "}
                        <h2 className="scheduleEditorIndividualOperationDropdownOptionText">
                          Option 2
                        </h2>
                        <input className="scheduleEditorIndividualOperationDropdownOptionInput"></input>
                      </div>
                      <div className="scheduleEditorIndividualOperationDropdownOptionContainer">
                        {" "}
                        <h2 className="scheduleEditorIndividualOperationDropdownOptionText">
                          Option 3
                        </h2>
                        <input className="scheduleEditorIndividualOperationDropdownOptionInput"></input>
                      </div>
                      <div className="scheduleEditorIndividualOperationDropdownOptionContainer">
                        <h2
                          onClick={(e) => deleteOperation(e, index)}
                          className="scheduleEditorIndividualOperationDropdownDeleteText"
                        >
                          Delete Operation
                        </h2>
                      </div>
                    </div>
                  ) : null}
                </div>{" "}
                {index !=
                props.schedules.find((schedule) => {
                  return schedule.name === props.currentlyOpenSchedules;
                }).operations.length -
                  1 ? (
                  <div className="operationDirectionContainer">
                    <img
                      className="operationDirectionImage"
                      src={operationDirection}
                    ></img>
                  </div>
                ) : null}
              </div>
            ))}
          {creatingNewOperation ? (
            <div className="operationDirectionContainer">
              <img
                className="operationDirectionImage"
                src={operationDirection}
              ></img>
            </div>
          ) : null}
          {!creatingNewOperation ? (
            <div className="operationCreateButtonContainer">
              <h2
                className="operationCreateButtonText"
                onClick={() => setCreatingNewOperation(true)}
              >
                +
              </h2>
            </div>
          ) : (
            <CreateOperaiton
              setOpenOperation={setOpenOperation}
              setCreatingNewOperation={setCreatingNewOperation}
              schedules={props.schedules}
              setSchedules={props.setSchedules}
              setCurrentlyOpenSchedules={props.setCurrentlyOpenSchedules}
              currentlyOpenSchedules={props.currentlyOpenSchedules}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleEditor;
