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
      // let filteredTweet = state.data.tweets.filter(
      //   tweet => tweet.id !== action.id
      // );
      let index = state.data.tweets.findIndex(tweet => tweet.id === action.id);
      let cloneTweets = [...state.data.tweets];
      cloneTweets.splice(index, 1);
      return {
        data: Object.assign({}, state.data, {
          tweets: [...cloneTweets]
        })
      };
    default:
      return state;
  }
};

export default timelines;
