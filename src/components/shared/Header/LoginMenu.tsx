import { buttonContainer } from "./index.css";

const LoginMenu = () => {
  const handleProfileClick = () => {
    alert("로그인");
  };

  return (
    <div className={buttonContainer}>
      {/** 임시 버튼 */}
      <button
        style={{ backgroundColor: "violet", width: "4rem", height: "2.5rem" }}
        aria-label="Login"
        onClick={handleProfileClick}
      >
        로그인
      </button>
    </div>
  );
};

export default LoginMenu;
