import { UPDATE_TIMELINE, SEND_TWEET, DELETE_TWEET } from "../action/timeline";

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
    case DELETE_TWEET:
      let tweetsClone = [...state.data.tweets];
      tweetsClone.splice(action.id, 1);
      return {
        data: Object.assign({}, state.data, {
          tweets: [...tweetsClone]
        })
      };
    default:
      return state;
  }
};

export default timelines;
