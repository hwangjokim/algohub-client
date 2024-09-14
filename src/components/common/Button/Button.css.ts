/**
 * vanilla extract 에서의 모든 css는 css.ts 라는 파일 하에서 정의되어야 합니다.
 * 공식문서 참고해주세요 !
 * */

import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  borderRadius: "10px",
  backgroundColor: theme.color.purple,

  ...theme.font["body1-m-16"]
});
