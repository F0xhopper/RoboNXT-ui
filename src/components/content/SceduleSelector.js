import { useState } from "react";

const ScheduleSelector = (props) => {
  const [creatingSchedule, setCreatingSchedule] = useState(false);
  const [scheduleInput, setScheduleInput] = useState();
  function openSchedule(scheduleName) {
    if (props.currentlyOpenSchedules !== scheduleName) {
      props.setCurrentlyOpenSchedules(scheduleName);
    }
  }
  function createSchedule(event) {
    if (creatingSchedule && event.key == "Enter") {
      props.setSchedules((prevState) => [
        ...prevState,
        { name: scheduleInput, operations: [] },
      ]);
      setCreatingSchedule(false);
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
