import SearchBar from "./components/header/SearchBar";
import AccountInfo from "./components/header/AccountInfo";
import SystemLogo from "./components/header/SystemLogo";
import ToolBar from "./components/header/ToolBar";
import ScheduleSelector from "./components/content/SceduleSelector";
import Navigator from "./components/navigator/Navigator";
import ScheduleEditor from "./components/content/ScheduleEditor/ScheduleEditor";
import { useState } from "react";

function App() {
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
        <ScheduleSelector />
        <ScheduleEditor />
      </div>
    </div>
  );
}

export default App;
