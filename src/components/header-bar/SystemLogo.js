// Image
import logo from "/Users/edenphillips/Desktop/Projects/uk_robotics/src/Images/company-branding.png";
/**
 * The systems / company logo
 * @returns {JSX.Element} 
 */
const SystemLogo = () => {
  return (
    <div className="systemImageLogoContainer">
      <img className='systemLogoImage'src={logo}></img>
    </div>
  );
};

export default SystemLogo;
