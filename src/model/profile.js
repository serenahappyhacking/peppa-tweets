import avatar from "../features/common/img/avatar.jpg";
import simple from "../features/common/img/simple.jpg";

const PROFILE_DATA = {
  avatar: avatar,
  cardname: "Serena",
  aliasname: "@happyhacking",
  tweetsNum: 236,
  followingNum: 98,
  followersNum: 474,
  bguser: simple,
  trends: [
    { topic: "Jeffrey Epstein", detail: "43.4K Tweets" },
    {
      topic: "#PresidentsDay",
      detail: "JCrockett (#BeAPositiveDifference!) is Tweeting about this"
    },
    { topic: "#MondayMotivaton", detail: "79.8K Tweets" },
    {
      topic: "#DWTSau",
      detail: "TV WEEK is Tweeting about this"
    },
    { topic: "Jeffrey Epstein", detail: "43.4K Tweets" },
    {
      topic: "#PresidentsDay",
      detail: "JCrockett (#BeAPositiveDifference!) is Tweeting about this"
    },
    { topic: "#MondayMotivaton", detail: "79.8K Tweets" },
    {
      topic: "#DWTSau",
      detail: "TV WEEK is Tweeting about this"
    }
  ]
};

export const getProfileData = userId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PROFILE_DATA);
    }, 500);
  });
};
