import { set } from "ramda";

import {
  UPDATE_NAME,
  UPDATE_AGE,
  UPDATE_LANGUAGES,
  UPDATE_EMAIL,
  UPDATE_HOBBIES
} from "../shared/constants";
import {
  nameLens,
  ageLens,
  languagesLens,
  emailLens,
  personalHobbiesLens,
  workHobbiesLens
} from "./lens-path";

const initialState = {
  otherUnusedProp: "for example only",
  profile: {
    name: "John Doe",
    age: 25,
    hobbies: {
      personal: ["Hiking", "Spending time with family"],
      work: ["Algorithms", "Recursion"]
    },
    languages: ["Javascript", "Typescript", "Python"],
    email: "j.doe@gfake.com"
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return set(nameLens, action.payload, state);
    case UPDATE_AGE:
      return set(ageLens, action.payload, state);
    case UPDATE_LANGUAGES:
      return set(languagesLens, action.payload, state);
    case UPDATE_EMAIL:
      return set(emailLens, action.payload, state);
    case UPDATE_HOBBIES:
      const personalUpdated = set(
        personalHobbiesLens,
        action.payload.personal,
        state
      );
      return set(workHobbiesLens, action.payload.work, personalUpdated);
    default:
      return state;
  }
}

// const updateName = (state, name) => set(nameLens, name, state);
// const updateAge = (state, age) => set(ageLens, age, state);
// const updateEmail = (state, email) => set(emailLens, email, state);
// const updateHobbies = (state, hobbies) => {
//   const updatedPersonal = set(personalHobbiesLens, hobbies.personal, state);
//   return set(workHobbiesLens, hobbies.work, updatedPersonal);
// };

// const updateLanguages = (state, languages) =>
//   set(languagesLens, languages, state);

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case UPDATE_NAME:
//       return updateName(state, action.payload);
//     case UPDATE_AGE:
//       return updateAge(state, action.payload);
//     case UPDATE_LANGUAGES:
//       return updateLanguages(state, action.payload);
//     case UPDATE_EMAIL:
//       return updateEmail(state, action.payload);
//     case UPDATE_HOBBIES:
//       return updateHobbies(state, action.payload);
//     default:
//       return { ...state };
//   }
// }
