import { z } from "zod";

const dateRegex = /^\d{4}\.\d{2}\.\d{2}$/;

export const groupSchema = z
  .object({
    image: z.string(),
    name: z.string().max(15),
    startDate: z.string().regex(dateRegex),
    endDate: z.string().regex(dateRegex),
    desc: z.string(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "종료 일자는 시작 일자보다 나중이어야 합니다.",
    path: ["endDate"],
  });
