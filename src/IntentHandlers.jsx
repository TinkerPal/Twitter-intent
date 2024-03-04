import React from "react";

function OpenWindow(intentUrl) {
  const maxWidth = 800; // Maximum width for the popup
  const width = Math.min(window.innerWidth - 20, maxWidth); // Responsive width

  const height = 600;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  // Open the Twitter intent URL in a popup centered within the screen
  window.open(
    intentUrl,
    "TwitterSharePopup",
    `width=${width},height=${height},left=${left},top=${top}`
  );
}

export function VerifyIntent() {
  const tweetText = encodeURIComponent(
    "Verifying my Twitter account for my #GalxeID gid:drJ3TLiGGBSefaRsMQj8dg @Galxe"
  );
  const tweetUrl = encodeURIComponent("https://galxe.com/id");

  const intentUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
  OpenWindow(intentUrl);
}

export function FollowIntent(userName) {
  const intentUrl = `https://twitter.com/intent/follow?screen_name=${userName}`;
  OpenWindow(intentUrl);
}
export function LikeIntent(tweetID) {
  const intentUrl = `https://twitter.com/intent/like?tweet_id=${tweetID}`;
  OpenWindow(intentUrl);
}
export function RepostIntent(tweetID) {
  const intentUrl = `https://twitter.com/intent/retweet?tweet_id=${tweetID}`;
  OpenWindow(intentUrl);
}

// const handleTwitterShare = () => {
//   const tweetText = encodeURIComponent(
//     "Verifying my Twitter account for my #GalxeID gid:drJ3TLiGGBSefaRsMQj8dg @Galxe"
//   );
//   const tweetUrl = encodeURIComponent("https://galxe.com/id");
//   const intentUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
//   OpenWindow(intentUrl);

//   // https://twitter.com/intent/follow?screen_name=blocjerk

//   // const intentUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
//   const intentUrl = `https://twitter.com/intent/follow?screen_name=blocjerk`;

//   // Calculate the centered position for the popup
// };
