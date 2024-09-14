import Button from "@/components/common/Button";
import { LoginButtonStyle } from "./LoginMenu.css";
import { buttonContainer } from "./index.css";

const LoginMenu = () => {
  const handleProfileClick = () => {
    alert("로그인");
  };

  return (
    <div className={`${buttonContainer} ${LoginButtonStyle}`}>
      {/** 임시 버튼 */}
      <Button
        aria-label="Login"
        size="small"
        onClick={handleProfileClick}
      >
        로그인
      </Button>
    </div>
  );
};

export default LoginMenu;
