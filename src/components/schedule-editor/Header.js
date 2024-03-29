/**
 * The unfuctional opened schedule navigator
 * @returns {JSX.Element}
 */
const ScheduleEditorHeader = () => {
  return (
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
  );
};

export default ScheduleEditorHeader;
