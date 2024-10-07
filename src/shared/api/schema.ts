import { z } from "zod";

export const groupSchema = z
  .object({
    image: z.string(),
    name: z.string().max(15),
    startDate: z.date(),
    endDate: z.date(),
    desc: z.string(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "종료 일자는 시작 일자보다 나중이어야 합니다.",
    path: ["endDate"],
  });
