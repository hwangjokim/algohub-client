"use client";
import Lottie from "lottie-react";

type LottiePlayerProps = {
  /** size값은 다음과 같이 들어갑니다.
   * `style={{ width: size, height: size }}`
   * */
  size: string;
  /** `src/asset/lottie의 json파일을 사용해주세요.` */
  animationJson: unknown;
  /** 애니메이션 반복 실행 여부입니다. */
  loop?: boolean;
};

const Animation = ({ size, animationJson, loop = true }: LottiePlayerProps) => {
  return (
    <Lottie
      autoplay
      loop={loop}
      style={{ width: size, height: size }}
      animationData={animationJson}
    />
  );
};
export default Animation;
