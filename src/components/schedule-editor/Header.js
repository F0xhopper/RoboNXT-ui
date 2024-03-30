/**
 * The unfuctional opened schedule navigator
 * @returns {JSX.Element}
 */
const ScheduleEditorHeader = () => {
  // Header option names for map rendering
  const headerNames = ["Schedule", "Properties", "Parameters", "Interaction"];
  return (
    <div className="scheduleEditorSelectorContainer">
      {headerNames.map((name) => (
        <div
          className={
            name == "Schedule"
              ? "scheduleEditorSelectorIndividualContainerSelected"
              : "scheduleEditorSelectorIndividualContainerUnselected"
          }
        >
          <h2
            className={
              name == "Schedule"
                ? "scheduleEditorSelectorIndividualTextSelected"
                : "scheduleEditorSelectorIndividualTextUnselected"
            }
          >
            {name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ScheduleEditorHeader;
