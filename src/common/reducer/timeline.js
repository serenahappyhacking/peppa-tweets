import { UPDATE_TIMELINE } from "../action/timeline";
import { SEND_TWEET } from "../action/timeline";

const initialState = { data: {} };

const timelines = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIMELINE:
      return {
        data: { ...state.data, ...action.data }
      };
    case SEND_TWEET:
      return {
        data: Object.assign({}, state.data, {
          tweets: [action.newTweet, ...state.data.tweets]
        })
      };
    default:
      return state;
  }
};

export default timelines;
