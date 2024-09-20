import { arrow } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import Button from "@/common/component/Button";
import Image from "next/image";
import Text from "./Text";
import {
  arrowContainer,
  arrowStyle,
  contentsContainer,
  imageStyle,
  introButtonContainer,
  introButtonStyle,
  introContainer,
  introTextContainer,
  sectionStyle,
} from "./index.css";
import graphic from "/public/assets/pixel3.webp";

const intro = { section: "intro" } as const;
const Section1 = () => {
  const handleClick = () => {
    const featureSection = document.querySelector("#features");
    featureSection?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section id="introduction" className={sectionStyle}>
      <div className={contentsContainer(intro)}>
        <div className={introContainer}>
          <h1 className={introTextContainer()}>
            <Text>함께 도전하고 함께 성장하는</Text>
            <Text.Em>알고리즘 스터디 플랫폼</Text.Em>
          </h1>
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
        <Image
          className={imageStyle(intro)}
          src={graphic}
          alt="graphic"
          unoptimized
          priority
        />
      </div>
      <div className={arrowContainer}>
        <Animation
          role="button"
          onClick={handleClick}
          // onKeyDown={}
          tabIndex={0}
          className={arrowStyle}
          size="10.8rem"
          animationJson={arrow}
        />
      </div>
    </section>
  );
};

export default Section1;
