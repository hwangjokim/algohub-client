import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import { validateNickname } from "../api/validate";

// TODO: API연결 후 useQuery로 교체하며 동일하게 기능 적용하기
export const useCheckOnServer = <
  // TODO: type을 signupSchema 등 nickname, baekjoon 쓰는 schema로 변경하기
  T extends UseFormReturn<{
    nickname: string;
    baekjoonId: string;
    introduction: string;
  }>,
>(
  form: T,
  nickname: string,
  baekjoonId: string,
  serverValidationSchema: z.ZodObject<{
    nickname: z.ZodString;
    baekjoonId: z.ZodString;
    introduction: z.ZodString;
  }>,
) => {
  const [isNicknameLoading, setNicknameLoading] = useState(false);
  const [isBaekjoonIdLoading, setBaekjoonIdLoading] = useState(false);

  useEffect(() => {
    // 비어있을 땐 검사 안하기
    if (!nickname.length) {
      form.clearErrors("nickname");
      return;
    }
    // schema 검사 후 통과 시 서버 검증
    const partialSchema = serverValidationSchema.partial();
    const parseResult = partialSchema.safeParse({ nickname });
    if (!parseResult.success) {
      form.setError("nickname", parseResult.error);
      return;
    }
    const checkOnServer = async () => {
      const res = await validateNickname(nickname);
      // 비동기 처리 완료 전에 입력을 다 지웠을 때
      if (!form.getValues("nickname").length) {
        form.setError("nickname", {
          message: "닉네임을 확인해주세요.",
          type: "custom",
        });
        setNicknameLoading(false);
        return;
      }

      if (res) {
        form.clearErrors("nickname");
      } else {
        form.setError("nickname", {
          message: "중복된 닉네임이에요.",
          type: "custom",
        });
      }
      setNicknameLoading(false);
    };
    setNicknameLoading(true);
    checkOnServer();
  }, [nickname]);

  // 이하 동일
  useEffect(() => {
    if (!nickname.length) {
      form.clearErrors("baekjoonId");
      return;
    }
    const partialSchema = serverValidationSchema.partial();
    const parseResult = partialSchema.safeParse({ baekjoonId });
    if (!parseResult.success) {
      form.setError("baekjoonId", parseResult.error);
      return;
    }

    const checkOnServer = async () => {
      const res = await validateNickname(baekjoonId);
      if (!form.getValues("baekjoonId").length) {
        form.setError("nickname", {
          message: "백준 아이디를 확인해주세요.",
          type: "custom",
        });
        setBaekjoonIdLoading(false);
        return;
      }

      if (res) {
        form.clearErrors("baekjoonId");
      } else {
        form.setError("baekjoonId", {
          message: "이미 등록된 아이디에요.",
          type: "custom",
        });
      }
      setBaekjoonIdLoading(false);
    };
    setBaekjoonIdLoading(true);
    checkOnServer();
  }, [baekjoonId]);

  return { isNicknameLoading, isBaekjoonIdLoading };
};
