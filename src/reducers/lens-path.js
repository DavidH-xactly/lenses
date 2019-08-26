import { lensPath } from "ramda";

export const nameLens = lensPath(["profile", "name"]);
export const ageLens = lensPath(["profile", "age"]);
export const personalHobbiesLens = lensPath(["profile", "hobbies", "personal"]);
export const workHobbiesLens = lensPath(["profile", "hobbies", "work"]);
export const languagesLens = lensPath(["profile", "languages"]);
export const emailLens = lensPath(["profile", "email"]);
