import arrowUp from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/up-arrow.png";
import arrowDown from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/down-arrow.png";
import hamburgerMenu from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/hamburger-menu.png";
/**
 * The individual operations of the opened schedule
 * @returns {JSX.Element}
 */
const IndividualOperaiton = (props) => {
  /**
   * Deletes the operation with given index
   * Then closes current open operation
   * @param {number} index - The index of the operation wanting to be deleted in the operations array
   */
  function deleteOperation(index) {
    // Gets the index of the open schedule in the schedules array
    const indexOfSchedule = props.schedules.findIndex(
      (x) => x.name === props.currentlyOpenSchedules
    );
    // Gets the currently open schedule operations array from the schedules array
    let filteredOperations = props.schedules.find((schedule) => {
      return schedule.name === props.currentlyOpenSchedules;
    }).operations;

    // Deletes the operation using given index from the operations array variable
    filteredOperations.splice(index, 1);

    // Sets the new changed operations array variable into the prop schedules array
    props.setSchedules((prevSchedules) => {
      return prevSchedules.map((schedule, index) => {
        if (index === indexOfSchedule) {
          return {
            ...schedule,
            operations: filteredOperations,
          };
        }
        return schedule;
      });
    });
    // Then closes any operation which may have opened from the index of the after operations changing
    props.setOpenOperation();
  }
  /**
   * Opens the operation with the given index
   * @param {number} index - the index of the operation wanting to be opened
   */
  function openOperationFunction(index) {
    //Opens the given operation from index, if already open closes it when function called
    props.setOpenOperation(props.openOperation !== index ? index : undefined);
  }
  /**
   * Moves the operation up or down in the array depending on arrow pressed
   * @param {object} e - event object used to get id to determine which arrow is pressed
   * @param {number} index - the index of the operation wanting to be moved
   */
  function moveOperation(e, index) {
    // Gets the index of the open schedule in the schedules array
    const indexOfSchedule = props.schedules.findIndex(
      (x) => x.name === props.currentlyOpenSchedules
    );
    //Closes any open Operation
    props.setOpenOperation();
    // Gets the currently open schedule operations array from the schedules array
    let filteredOperations = props.schedules.find((schedule) => {
      return schedule.name === props.currentlyOpenSchedules;
    }).operations;

    const operationToMove = filteredOperations[index]; // - operation wanting to be moved
    // Deletes the given operation from that current index
    filteredOperations.splice(index, 1);
    // Then adds the operation back into to the array baack or forward depending on which arrow is pressed
    if (e.target.id == "arrowUp") {
      filteredOperations.splice(index - 1, 0, operationToMove);
    } else {
      filteredOperations.splice(index + 1, 0, operationToMove);
    }
    // Sets the new changeed operations array variable into the prop schedules array
    props.setSchedules((prevSchedules) => {
      let updatedSchedules = [...prevSchedules];
      updatedSchedules[indexOfSchedule] = {
        ...updatedSchedules[indexOfSchedule],
        operations: filteredOperations,
      };
      return updatedSchedules;
    });
  }
  return (
    <div className="scheduleEditorIndividualOperationContainer">
      <div className="scheduleEditorIndividualOperationTopContainer">
        <div>
          <div className="scheduleEditorArrowsContainer">
            <img
              id="arrowUp"
              onClick={(e) => moveOperation(e, props.index)}
              className="scheduleEditorArrowImage"
              src={arrowUp}
            ></img>
            <img
              id="arrowDown"
              onClick={(e) => moveOperation(e, props.index)}
              className="scheduleEditorArrowImage"
              src={arrowDown}
            ></img>
          </div>{" "}
          <div className="scheduleEditorIndividualOperationTextContainer">
            <h2 className="scheduleEditorIndividualOperationText">
              {props.operation.operation}
            </h2>
          </div>
        </div>
        <div onClick={() => openOperationFunction(props.index)}>
          {" "}
          <img
            className="scheduleEditorHamburgerImage"
            src={hamburgerMenu}
          ></img>{" "}
        </div>
      </div>
      {props.openOperation == props.index ? (
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
              onClick={(e) => deleteOperation(props.index)}
              className="scheduleEditorIndividualOperationDropdownDeleteText"
            >
              Delete Operation
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default IndividualOperaiton;
