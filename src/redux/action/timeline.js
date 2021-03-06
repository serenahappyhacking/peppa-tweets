export const UPDATE_TIMELINE = "update_timeline";
export const SEND_TWEET = "send_tweet";
export const DELETE_TWEET = "delete_tweet";

export const updateTimeline = data => ({
  type: UPDATE_TIMELINE,
  data
});

export const sendTweet = newTweet => ({
  type: SEND_TWEET,
  newTweet
});

export const deleteTweet = id => {
  console.log(id);
  return {
    type: DELETE_TWEET,
    id
  };
};
