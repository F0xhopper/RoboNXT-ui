const ScheduleSelector = () => {
  return (
    <div className="schdeduleSelectorContainer">
      <div className="scheduleCreateButtonContainer">
        <h1 className="scheduleCreateButtonText">+</h1>
      </div>
      <div>
        <div className="scheduleSelectorIndividualContainerUnselected">
          <h1 className="schduleSelectorText">Schedule 1</h1>
        </div>{" "}
        <div className="scheduleSelectorIndividualContainerUnselected">
          <h1 className="schduleSelectorText">Schedule 1</h1>
        </div>{" "}
        <div className="scheduleSelectorIndividualContainerSelected">
          <h1 className="schduleSelectorText">Schedule 1</h1>
        </div>{" "}
      </div>
    </div>
  );
};

export default ScheduleSelector;
