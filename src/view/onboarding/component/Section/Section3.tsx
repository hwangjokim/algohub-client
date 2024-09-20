import Image from "next/image";
import Text from "./Text";
import {
  contentsContainer,
  gradientStyle,
  imageContainer,
  imageStyle,
  introContainer,
  introTextContainer,
  sectionStyle,
} from "./index.css";
import comment from "/public/assets/comment.gif";

const feature2 = { section: "feature2" } as const;
const Section3 = () => {
  return (
    <section id="features" className={sectionStyle}>
      <div className={contentsContainer(feature2)}>
        <div className={introContainer}>
          <h1 className={introTextContainer(feature2)}>
            <Text>
              풀이를 <Text.Em>자동으로 등록</Text.Em>해보세요.
            </Text>
            <div>
              <Text.Small>
                스터디 그룹에 참가하여 마감 기한안에 문제를
              </Text.Small>
              <Text.Small>풀며 실력을 쌓을 수 있어요.</Text.Small>
            </div>
          </h1>
        </div>
        <div className={imageContainer.feature2}>
          <Image
            className={imageStyle(feature2)}
            src={comment}
            alt="comment"
            unoptimized
          />
          <div className={gradientStyle} />
        </div>
      </div>
    </section>
  );
};

export default Section3;
