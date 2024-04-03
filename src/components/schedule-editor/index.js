import React, { useState, useEffect } from "react";
// Componenets
import ScheduleEditorHeader from "./Header";
import ScheduleSelector from "./ScheduleSelector";
import CreateOperaiton from "./CreateOperation";
import IndividualOperaiton from "./IndividualOperation";
// Image
import operationDirection from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/schedule-editor/operation-direction.png";
/**
 * The schedule editor wrapper
 * Encompases the schedule selector, each inidivual operation of the open schedule and the create operation tool if in create mode
 * Dynamically renders certain componenets based on variable values
 * Props are taken from the App.js then used as props in the wrapped components
 * @returns {JSX.Element}
 */
const ScheduleEditor = (props) => {
  const [openOperation, setOpenOperation] = useState(); // - the index of the current open operation if any
  const [creatingNewOperation, setCreatingNewOperation] = useState(false); // - is the user creating new operation, if true opens create operation selector

  /**
   * closes any opened operations and the create opeartions selector when another schedule is opened
   */
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
              <React.Fragment>
                <IndividualOperaiton
                  schedules={props.schedules}
                  setSchedules={props.setSchedules}
                  setOpenOperation={setOpenOperation}
                  openOperation={openOperation}
                  operation={operation}
                  index={index}
                  currentlyOpenSchedules={props.currentlyOpenSchedules}
                />

                {index !=
                  props.schedules.find((schedule) => {
                    return schedule.name === props.currentlyOpenSchedules;
                  }).operations.length -
                    1 && (
                  <div className="operationDirectionContainer">
                    <img
                      className="operationDirectionImage"
                      src={operationDirection}
                    ></img>
                  </div>
                )}
              </React.Fragment>
            ))}
          {creatingNewOperation &&
            props.schedules.find((schedule) => {
              return schedule.name === props.currentlyOpenSchedules;
            }).operations.length !== 0 && (
              <div className="operationDirectionContainer">
                <img
                  className="operationDirectionImage"
                  src={operationDirection}
                ></img>
              </div>
            )}
          {!creatingNewOperation ? (
            <div className="operationCreateButtonContainer">
              <h2
                className="operationCreateButtonText"
                style={{
                  marginTop:
                    props.schedules.find((schedule) => {
                      return schedule.name === props.currentlyOpenSchedules;
                    }).operations.length !== 0
                      ? "0px"
                      : "20px",
                }}
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
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default ScheduleEditor;
