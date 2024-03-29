// Images
import deviceOpertion from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/operation-icons/device-operation.png";
import tranferIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/operation-icons/transfer-plate.png";
import breakLoopIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/operation-icons/break-loop.png";
import startNextThreadIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/operation-icons/start-next-thread.png";
/**
 * Create new operation selector
 * Appears when plus button in the open schedule is pressed
 * When an operation is selected it adds a new operation to the end of the operations array and closes seletor
 * @returns {JSX.Element}
 */
const CreateOperaiton = (props) => {
  /**
   * Adds a new operation to the currently opened schedule
   * Then once added closes the selector
   * @param {object} event - the event object used to get the id which holds the names of the operations
   */
  function createOperation(event) {
    // Gets the index of the open schedule in the schedules array
    const indexOfSchedule = props.schedules.findIndex(
      (x) => x.name === props.currentlyOpenSchedules
    );
    // using the opeartion name gathered from id and the indexOfSchedule it adds a new operation to the operations array within the open schedule
    props.setSchedules((prevSchedules) => {
      return prevSchedules.map((schedule, index) => {
        if (index === indexOfSchedule) {
          return {
            ...schedule,
            operations: [
              ...schedule.operations,
              { operation: event.target.id },
            ],
          };
        }
        return schedule;
      });
    });
    // Then sets the created operation as opened for editing of the options
    props.setOpenOperation(
      props.schedules.find((schedule) => {
        return schedule.name === props.currentlyOpenSchedules;
      }).operations.length
    );
    // Closes the create operation selectr
    props.setCreatingNewOperation(false);
  }
  return (
    <div className="scheduleEditorCreateOptionsContainer">
      <h2 className="scheduleEditorCreateOptionsText">Choose Operation</h2>
      <div className="scheduleEditorCreateOptionsInnerContainer">
        <div
          id="Tranfer Plate"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={tranferIcon}
          ></img>
        </div>{" "}
        <div
          id="Device Operation"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={deviceOpertion}
          ></img>
        </div>{" "}
        <div
          id="Break Loop"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={breakLoopIcon}
          ></img>
        </div>{" "}
        <div
          id="Start Next Schedule Thread"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={startNextThreadIcon}
          ></img>
        </div>{" "}
        <div
          id="Tranfer Plate"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={tranferIcon}
          ></img>
        </div>{" "}
        <div
          id="Device Operation"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={deviceOpertion}
          ></img>
        </div>{" "}
        <div
          id="Break Loop"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={breakLoopIcon}
          ></img>
        </div>{" "}
        <div
          id="Start Next Schedule Thread"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={startNextThreadIcon}
          ></img>
        </div>{" "}
        <div
          id="Tranfer Plate"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={tranferIcon}
          ></img>
        </div>{" "}
        <div
          id="Device Operation"
          onClick={(e) => createOperation(e)}
          className="scheduleEditorCreateOptionsIndividualContainer"
        >
          <img
            className="scheduleEditorCreateOptionsIndividualImage"
            src={deviceOpertion}
          ></img>
        </div>{" "}
      </div>
    </div>
  );
};

export default CreateOperaiton;
