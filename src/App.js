import SearchBar from "./components/header/SearchBar";
import AccountInfo from "./components/header/AccountInfo";
import SystemLogo from "./components/header/SystemLogo";
import ToolBar from "./components/header/ToolBar";
import ScheduleSelector from "./components/content/SceduleSelector";
import Navigator from "./components/navigator/Navigator";
import ScheduleEditor from "./components/content/ScheduleEditor/ScheduleEditor";
import { useState } from "react";

function App() {
  const [currentlyOpenSchedules, setCurrentlyOpenSchedules] =
    useState("Schedule 1");
  const [schedules, setSchedules] = useState([
    { name: "Schedule 1", operations: [{ operation: "Tranfer Tube" }] },
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
      <div className="headerBar">
        {" "}
        <div>
          <SystemLogo />
          <ToolBar />
        </div>
        <div>
          {" "}
          <SearchBar />
          <AccountInfo />
        </div>
      </div>
      <div className="navigatorBar">
        <Navigator />
      </div>
      <div className="content">
        <ScheduleSelector
          schedules={schedules}
          setSchedules={setSchedules}
          setCurrentlyOpenSchedules={setCurrentlyOpenSchedules}
          currentlyOpenSchedules={currentlyOpenSchedules}
        />
        <ScheduleEditor
          schedules={schedules}
          setCurrentlyOpenSchedules={setCurrentlyOpenSchedules}
          currentlyOpenSchedules={currentlyOpenSchedules}
        />
      </div>
    </div>
  );
}

export default App;
