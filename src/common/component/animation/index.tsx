"use client";
import Lottie from "lottie-react";

type LottiePlayerProps = {
  size: string;
  animationJson: unknown;
  loop?: boolean;
};

/**
 * @param {string} size style={{ width: size, height: size }}
 * @param {boolean} loop default true
 */
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
