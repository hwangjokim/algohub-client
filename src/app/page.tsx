import Button from "@/components/common/Button/Button";
import "@/styles/globalStyles.css";

export default function Home() {
  return (
    <div>
      <Button text="로그인" isActive size="small" color="purple" />
      <Button text="로그인" size="small" color="purple" />
      <Button text="로그인" isActive size="small" color="gray" />
      <Button text="로그인" size="small" color="gray" />
      <Button text="로그인하기" isActive size="large" color="purple" />
      <Button text="로그인하기" size="large" color="purple" />
      <Button
        text="스터디 만들기"
        isLeftIc
        isActive
        size="large"
        color="purple"
      />
      <Button text="스터디 만들기" isLeftIc size="large" color="purple" />
      <Button text="나가기" size="medium" color="purple" />
      <Button text="나가기" isActive size="medium" color="purple" />
      <Button text="나가기" size="medium" color="lg" />
      <Button text="나가기" isActive size="medium" color="lg" />
    </div>
  );
}
