
import { userLoginSchema, userSchema } from "@modules/users/user.schema";
import { registrantSchema } from "@modules/registrants/registrants.schema";

export const validationSchemaMap = {
  "user" : userSchema,
  "user-login": userLoginSchema,
  "registrant": registrantSchema,
};

export type ValidationTypes = keyof typeof validationSchemaMap;
