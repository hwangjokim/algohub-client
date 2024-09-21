import Portal from "@/common/component/Portal";
import Toast from "@/common/component/Toast/Toast";
import { containerStyle } from "@/common/component/Toast/index.css";
import { toastAtom } from "@/shared/store/toast";
import { useAtom } from "jotai";

const ToastProvider = () => {
  const [atom, setAtom] = useAtom(toastAtom);

  const closeToast = (id: string | number) => {
    const removed = atom.toastList.filter((toast) => toast.id !== id);

    setAtom({ toastList: removed });
  };

  return (
    <Portal id="toast">
      <div className={containerStyle}>
        {atom.toastList.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            onClose={() => closeToast(toast.id)}
          >
            아이디 비밀번호를 확인해주세요.
          </Toast>
        ))}
      </div>
    </Portal>
  );
};

export default ToastProvider;
