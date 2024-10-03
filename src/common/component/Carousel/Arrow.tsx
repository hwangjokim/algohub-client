import { IcnBtnArrowLeft, IcnBtnNext } from "@/asset/svg";
import { arrowStyle } from "@/common/component/Carousel/index.css";

type ArrowProps = {
  position: "left" | "right";
  onClick: () => void;
};

const Arrow = ({ position, onClick }: ArrowProps) => {
  return (
    <button className={arrowStyle({ position })} onClick={onClick}>
      {position === "left" && <IcnBtnArrowLeft width={24} height={24} />}
      {position === "right" && <IcnBtnNext width={24} height={24} />}
    </button>
  );
};

export default Arrow;
