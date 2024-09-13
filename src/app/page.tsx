import { icnPlusStyle } from "@/app/style.css";
import { IcnPlus } from "@/assets/svgs";
import Button from "@/components/common/Button";
import "@/styles/globalStyles.css";

export default function Home() {
  return (
    <>
      <Button isActive size="small" color="purple">
        로그인
      </Button>
      <Button size="small" color="purple">
        로그인
      </Button>
      <Button isActive size="small" color="gray">
        로그인
      </Button>
      <Button size="small" color="gray">
        로그인
      </Button>
      <Button isActive size="large" color="purple">
        로그인하기
      </Button>
      <Button size="large" color="purple">
        로그인하기
      </Button>
      <Button isActive size="large" color="purple">
        <IcnPlus width="24" height="24" className={icnPlusStyle} />
        스터디 만들기
      </Button>
      <Button size="large" color="purple">
        <IcnPlus width="24" height="24" className={icnPlusStyle} />
        스터디 만들기
      </Button>
      <Button size="medium" color="purple">
        나가기
      </Button>
      <Button isActive size="medium" color="purple">
        나가기
      </Button>
      <Button size="medium" color="lg">
        나가기
      </Button>
      <Button isActive size="medium" color="lg">
        나가기
      </Button>
    </>
  );
}
