import accountIcon from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/social-media-avatar-profile-icon-isolated-on-square-background-vector.png";

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
