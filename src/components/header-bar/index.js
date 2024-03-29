import SystemLogo from "./SystemLogo";
import ToolBar from "./ToolBar";
import SearchBar from "./SearchBar";
import AccountInfo from "./AccountInfo";
/**
 * The header wrapper component
 * @returns {JSX.Element} 
 */
const HeaderBar = () => {
  return (
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
  );
};

export default HeaderBar;
