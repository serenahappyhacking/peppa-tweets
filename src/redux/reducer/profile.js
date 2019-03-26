import { UPDATE_PROFILE_DATA } from "../action/profile";

const initialState = { data: {} };

const profile = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_DATA:
      return {
        data: { ...state, ...action.data }
      };
    default:
      return state;
  }
};

export default profile;
