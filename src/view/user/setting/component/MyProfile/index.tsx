import EditForm from "../EditForm";
import { containerStyle, textStyle } from "./index.css";

const MyProfile = () => {
  return (
    <div className={containerStyle}>
      <h1 className={textStyle.heading}>내 프로필</h1>
      <EditForm />
    </div>
  );
};

export default MyProfile;
