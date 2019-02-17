export const UPDATE_TIMELINE = "update_timeline";
export const SEND_TWEET = "send_tweet";

export const updateTimeline = data => ({
  type: UPDATE_TIMELINE,
  data
});

export const sendTweet = tweet => ({
  type: SEND_TWEET,
  tweet
});
