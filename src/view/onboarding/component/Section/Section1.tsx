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
    const featureSection = document.querySelector("#feature-1");
    featureSection?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section id="introduction" className={sectionStyle} aria-labelledby="introduction-heading">
      <div className={contentsContainer(intro)}>
        <div className={introContainer}>
          <h1 id="introduction-heading" className={introTextContainer()}>
            <Text>함께 도전하고 함께 성장하는</Text>
            <Text.Em>알고리즘 스터디 플랫폼</Text.Em>
          </h1>
          <div className={introButtonContainer}>
            <div className={introButtonStyle}>
              <Button size="medium" color="lg" aria-label="로그인 페이지로 이동">
                로그인
              </Button>
            </div>
            <div className={introButtonStyle}>
              <Button size="medium" color="purple" aria-label="회원가입 페이지로 이동">
                회원가입 하기
              </Button>
            </div>
          </div>
        </div>
        <Image
          className={imageStyle(intro)}
          src={graphic}
          alt="장식용 이미지"
          unoptimized
          priority
        />
      </div>
      <div className={arrowContainer}>
        <Animation
          className={arrowStyle}
          role="button"
          onClick={handleClick}
          // onKeyDown={}
          tabIndex={0}
          aria-label="다음 섹션으로 이동"
          size="10.8rem"
          animationJson={arrow}
        />
      </div>
    </section>
  );
};

export default Section1;
