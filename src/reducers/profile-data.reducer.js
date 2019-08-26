import {
  UPDATE_NAME,
  UPDATE_AGE,
  UPDATE_LANGUAGES,
  UPDATE_EMAIL,
  UPDATE_HOBBIES
} from "../shared/constants";

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

const updateName = (state, name) => ({
  ...state,
  profile: { ...state.profile, name }
});
const updateAge = (state, age) => ({
  ...state,
  profile: { ...state.profile, age }
});
const updateEmail = (state, email) => ({
  ...state,
  profile: { ...state.profile, email }
});
const updateHobbies = (state, hobbies) => {
  let currentState = { ...state };

  return {
    ...currentState,
    profile: {
      ...currentState.profile,
      hobbies: { personal: [...hobbies.personal], work: [...hobbies.work] }
    }
  };
};

const updateLanguages = (state, languages) => ({
  ...state,
  profile: { ...state.profile, languages }
});

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return updateName(state, action.payload);
    case UPDATE_AGE:
      return updateAge(state, action.payload);
    case UPDATE_LANGUAGES:
      return updateLanguages(state, action.payload);
    case UPDATE_EMAIL:
      return updateEmail(state, action.payload);
    case UPDATE_HOBBIES:
      return updateHobbies(state, action.payload);
    default:
      return { ...state };
  }
}
