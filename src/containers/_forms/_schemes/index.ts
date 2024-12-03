import { zodResolver } from "@mantine/form";
import { z } from "zod";

const schema = z
  .object({
    username: z.string(),
    select: z.number(),
    password: z.string().min(1, { message: "Your password is empty" }),
    repeat_password: z
      .string()
      .min(1, { message: "Please repeat your password" }),
  })
  .refine((data) => data.password === data.repeat_password, {
    message: "Password don't match",
    path: ["repeat_password"],
  });

export const componentsInitValues = {
  username: "",
  password: "",
  select: 1,
  repeat_password: "",
};

export const componentsValidation = zodResolver(schema);
