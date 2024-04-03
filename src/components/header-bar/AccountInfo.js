// Image
import accountIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/header-bar/account-icon.png";
/**
 * The non-functional account details with name and profile image
 * @returns {JSX.Element} 
 */
const AccountInfo = () => {
  return (
    <div className="accountInfoContainer">
      {" "}
      <h3 className="accountNameText">Jasper Fox</h3>
      <img className="accountIconImage" src={accountIcon}></img>
    </div>
  );
};

export default AccountInfo;
