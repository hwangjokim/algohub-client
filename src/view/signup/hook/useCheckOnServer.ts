import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import type { baseSignupSchema } from "../api/schema";
import { validateNickname } from "../api/validate";

export const useCheckOnServer = (
  form: UseFormReturn<z.infer<typeof baseSignupSchema>>,
  nickname: string,
  bjId: string,
) => {
  // TODO: useQuery로 교체하기
  const [isNicknameLoading, setNicknameLoading] = useState(false);
  const [isBaekjoonIdLoading, setBaekjoonIdLoading] = useState(false);

  const { dirtyFields } = form.formState;
  useEffect(() => {
    if (!dirtyFields.nickname) return;
    if (nickname.length < 1 || typeof nickname !== "string") return;

    const checkOnServer = async () => {
      const res = await validateNickname(nickname);
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

  useEffect(() => {
    if (!dirtyFields.baekjoonId) return;
    if (bjId.length < 4 || typeof bjId !== "string") return;

    const checkOnServer = async () => {
      const res = await validateNickname(bjId);
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
  }, [bjId]);

  return { isNicknameLoading, isBaekjoonIdLoading };
};
