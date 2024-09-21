import Portal from "@/common/component/Portal";
import Toast from "@/common/component/Toast/Toast";
import { containerStyle } from "@/common/component/Toast/index.css";

const ToastProvider = () => {
  // Toast 컴포넌트를 show할 함수
  // Toast 컴포넌트가 렌더링될 컨테이너 컴포넌트 -> Portal의 자식 컴포넌트로 제어 가능

  return (
    <Portal id="toast">
      <div className={containerStyle}>
        <Toast variant="error">아이디 비밀번호를 확인해주세요.</Toast>
      </div>
    </Portal>
  );
};

export default ToastProvider;
