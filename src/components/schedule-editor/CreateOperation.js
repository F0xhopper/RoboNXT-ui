import deviceOpertion from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Operation Icons/device-operation_hu164f4cf50c5bcef6c4ad218f9fba70e0_1251_500x0_resize_box_2 (1).png";
import tranferIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Operation Icons/transfer_hu5097c406b98ce7a80b354094a20bfc66_1302_7.png";
import breakLoopIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Operation Icons/break-loop_huec7716100118b8b4e150cb4139ff973e_987_ (1).png";
import startNextThreadIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/Operation Icons/start-next-thread_hu51ed62eab1cfb239e1765cd4773aa3 (1).png";

const CreateOperaiton = (props) => {
  function createOperation(event) {
    const indexOfSchedule = props.schedules.findIndex(
      (x) => x.name === props.currentlyOpenSchedules
    );
    props.setOpenOperation(
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
    </div>
  );
};

export default CreateOperaiton;
