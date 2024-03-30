import { useState } from "react";
// Components
import HeaderBar from "./components/header-bar";
import Navigator from "./components/navigator-bar";
import ScheduleEditor from "./components/schedule-editor";
/**
 * The app wrapper
 *  @returns {JSX.Element}
 */
function App() {
  // - The name of the schedule currently open
  const [currentlyOpenSchedules, setCurrentlyOpenSchedules] =
    useState("Schedule 1");
  // - The data objects of each schedule
  const [schedules, setSchedules] = useState([
    {
      name: "RunSchedule2Batch",
      operations: [
        { operation: "Transfer Tube" },
        { operation: "Device Operation" },
        { operation: "Start Next Schedule Thread" },
        { operation: "Loop" },
        { operation: "Break Loop" },
        { operation: "Transfer Tube" },
        { operation: "Device Operation" },
      ],
    },
    {
      name: "Schedule 1",
      operations: [
        { operation: "Transfer Tube" },
        { operation: "Device Operation" },
        { operation: "Transfer Tube" },
        { operation: "Device Operation" },
      ],
    },
    {
      name: "Schedule 2",
      operations: [
        { operation: "Transfer Tube" },
        { operation: "Loop" },
        { operation: "Break Loop" },
        { operation: "Transfer Tube" },
        { operation: "Start Next Schedule Thread" },
        { operation: "Device Operation" },
      ],
    },

    {
      name: "Schedule 3",
      operations: [
        { operation: "Transfer Tube" },
        { operation: "Start Next Schedule Thread" },
        { operation: "Device Operation" },
      ],
    },
  ]);
  return (
    <div className="App">
      <HeaderBar />

      <Navigator />

      <ScheduleEditor
        schedules={schedules}
        setSchedules={setSchedules}
        setCurrentlyOpenSchedules={setCurrentlyOpenSchedules}
        currentlyOpenSchedules={currentlyOpenSchedules}
      />
    </div>
  );
}

export default App;
