import { useState } from "react";
/**
 * The schedule selector and creator
 * Changes the open schedule
 * Opens an input when plus button pressed to create new schedule
 * @returns {JSX.Element}
 */
const ScheduleSelector = (props) => {
  const [creatingSchedule, setCreatingSchedule] = useState(false); // - True if user is creating new schedule which goes ont to makes input appear
  const [scheduleInput, setScheduleInput] = useState(); // - Text input of new schedule
  /**
   * Sets the clicked schedule to be open
   * @param {string} scheduleName - The name of schedule pressed
   */
  function openSchedule(scheduleName) {
    // If the schedule isnt currently open changes open schdule to clicked preventing unnecessary rerenders
    if (props.currentlyOpenSchedules !== scheduleName) {
      props.setCurrentlyOpenSchedules(scheduleName);
    }
  }
  /**
   * Adds a new schedule to the schedules array when enter is pressed and if input is not empty
   * @param {object} event - Event object to listen if enter key is pressed
   */
  function createSchedule(event) {
    // When the enter key is pressed and the input array isnt empty adds a new schedule with inputted name to schedules array
    if (scheduleInput != null && event.key == "Enter") {
      props.setSchedules((prevState) => [
        ...prevState,
        { name: scheduleInput, operations: [] },
      ]);
      // Closes the create schedule input 
      setCreatingSchedule(false);
      // Sets input to default so when opened again doesn't show previous text
      setScheduleInput("");
    }
  }

  return (
    <div className="schdeduleSelectorContainer">
      <div className="scheduleCreateButtonContainer">
        <h1
          className="scheduleCreateButtonText"
          onClick={() => setCreatingSchedule(true)}
        >
          +
        </h1>
      </div>
      <div>
        {props.schedules.map((schedule) => {
          return (
            <div
              onClick={() => openSchedule(schedule.name)}
              className={
                props.currentlyOpenSchedules === schedule.name
                  ? "scheduleSelectorIndividualContainerSelected"
                  : "scheduleSelectorIndividualContainerUnselected"
              }
            >
              <h1 className="schduleSelectorText">{schedule.name}</h1>
            </div>
          );
        })}
        <div
          className="createScheduleContainer"
          style={{ display: creatingSchedule ? "Block" : "None" }}
        >
          <input
            onBlur={() => {
              setCreatingSchedule(false);
              setScheduleInput("");
            }}
            ref={(input) => input && input.focus()}
            value={scheduleInput}
            className="createScheduleInput"
            onChange={(e) => {
              setScheduleInput(e.target.value);
            }}
            onKeyDown={createSchedule}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelector;
