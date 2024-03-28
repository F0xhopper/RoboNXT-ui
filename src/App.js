import HeaderBar from "./components/header-bar";
import ScheduleSelector from "./components/schedule-editor/ScheduleSelector";
import Navigator from "./components/navigator-bar";
import ScheduleEditor from "./components/schedule-editor";
import { useState } from "react";

function App() {
  const [currentlyOpenSchedules, setCurrentlyOpenSchedules] =
    useState("Schedule 1");
  const [schedules, setSchedules] = useState([
    { name: "Schedule 1", operations: [{ operation: "Transfer Tube" }] },
    {
      name: "Schedule 2",
      operations: [
        { operation: "Break Loop" },
        { operation: "Break Loop" },
        { operation: "Break Loop" },
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
