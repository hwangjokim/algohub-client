import Button from "@/common/component/button";
import { buttonContainer } from "@/shared/component/header/index.css";
import { LoginButtonStyle } from "@/shared/component/header/loginMenu.css";

const LoginMenu = () => {
  const handleProfileClick = () => {
    alert("로그인");
  };

  return (
    <div className={`${buttonContainer} ${LoginButtonStyle}`}>
      {/** 임시 버튼 */}
      <Button aria-label="Login" size="small" onClick={handleProfileClick}>
        로그인
      </Button>
    </div>
  );
};

export default LoginMenu;
