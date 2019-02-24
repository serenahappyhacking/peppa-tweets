import cat from "../features/common/img/cat.jpg";
import avatar from "../features/common/img/avatar.jpg";
import cafe from "../features/common/img/cafe.jpg";
import campus from "../features/common/img/campus.jpg";

const TIMELINE_DATA = {
  userId: 666,
  avatar: avatar,
  tweets: [
    {
      id: 1,
      fullname: "Addy Osmani",
      username: "@addyosmani",
      time: "19h",
      mainText:
        "Learn to debug CSS animations using @ChromeDevTools and the Animation",
      action: "Retweet",
      anothername: "Serena Wang",
      img: cat,
      avatar: avatar,
      replyNum: 53,
      likeNum: 279,
      retweetNum: 472
    },
    {
      id: 2,
      fullname: "Addy Osmani",
      username: "@addyosmani",
      time: "19h",
      mainText:
        "Learn to debug CSS animations using @ChromeDevTools and the Animation",
      action: "Retweet",
      anothername: "Serena Wang",
      img: cafe,
      avatar: avatar,
      replyNum: 53,
      likeNum: 279,
      retweetNum: 472
    },
    {
      id: 3,
      fullname: "Addy Osmani",
      username: "@addyosmani",
      time: "19h",
      mainText:
        "Learn to debug CSS animations using @ChromeDevTools and the Animation",
      action: "Retweet",
      anothername: "Serena Wang",
      img: campus,
      avatar: avatar,
      replyNum: 53,
      likeNum: 279,
      retweetNum: 472
    },
    {
      id: 4,
      fullname: "Addy Osmani",
      username: "@addyosmani",
      time: "19h",
      mainText:
        "Learn to debug CSS animations using @ChromeDevTools and the Animation",
      action: "Retweet",
      anothername: "Serena Wang",
      img: cafe,
      avatar: avatar,
      replyNum: 53,
      likeNum: 279,
      retweetNum: 472
    }
  ]
};

export const getPrevData = (offset, size) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(TIMELINE_DATA);
    }, 0);
  });
};

export const sendTweetData = newTweet => {
  return Promise.resolve({
    id: newTweet.userId,
    mainText: newTweet.textValue,
    fullname: "Leo",
    username: "@devxleo",
    time: "1min",
    avatar: avatar,
    action: "Retweet",
    anothername: "Serena Wang",
    img: cat,
    replyNum: 153,
    likeNum: 239,
    retweetNum: 4
  });
};
