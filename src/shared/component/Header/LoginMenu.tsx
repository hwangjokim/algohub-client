import Button from "@/common/component/Button";
import { LoginButtonStyle } from "@/shared/component/Header/LoginMenu.css";
import { buttonContainer } from "@/shared/component/Header/index.css";

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
