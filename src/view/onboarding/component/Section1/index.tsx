import { arrow } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import Button from "@/common/component/Button";
import Image from "next/image";
import {
  arrowContainer,
  arrowStyle,
  contentStyle,
  imageStyle,
  introButtonContainer,
  introButtonStyle,
  introContainer,
  introTextContainer,
  introTextStyle,
  section1Style,
} from "./index.css";
import graphic from "/public/assets/pixel3.gif";

const Section1 = () => {
  return (
    <section className={section1Style}>
      <div className={contentStyle}>
        <div className={introContainer}>
          <h2 className={introTextContainer}>
            <p className={introTextStyle()}>함께 도전하고 함께 성장하는</p>
            <p className={introTextStyle({ color: "purple" })}>
              알고리즘 스터디 플랫폼
            </p>
          </h2>
          <div className={introButtonContainer}>
            <div className={introButtonStyle}>
              <Button size="medium" color="lg">
                로그인
              </Button>
            </div>
            <div className={introButtonStyle}>
              <Button size="medium" color="purple">
                회원가입 하기
              </Button>
            </div>
          </div>
        </div>
        <Image className={imageStyle} unoptimized src={graphic} alt="graphic" />
      </div>
      <div className={arrowContainer} role="button">
        <Animation className={arrowStyle} size="10.8rem" animationJson={arrow} />
      </div>
    </section>
  );
};

export default Section1;
