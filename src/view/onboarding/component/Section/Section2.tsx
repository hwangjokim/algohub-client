import Image from "next/image";
import Text from "./Text";
import {
  contentsContainer,
  imageContainer,
  introContainer,
  introTextContainer,
  sectionStyle,
} from "./index.css";
import group from "/public/assets/group.png";


const Section2 = () => {
  return (
    <section id="features" className={sectionStyle()}>
      <div className={contentsContainer({ section: "second" })}>
        <div className={introContainer}>
          <h1 className={introTextContainer}>
            <Text>
              <Text.Em>백준</Text.Em>에서 문제를 제출하고
            </Text>
            <Text>
              <Text.Alphabet>Chrome extension</Text.Alphabet> 을 설치해
            </Text>
          </h1>
        </div>
        <div className={imageContainer({ section: "second" })}>
          <Image unoptimized src={group} alt="group" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
