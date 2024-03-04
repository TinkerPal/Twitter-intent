import React from "react";

import {
  VerifyIntent,
  FollowIntent,
  LikeIntent,
  RepostIntent,
} from "./IntentHandlers";

const TwitterShareButton = () => {
  return (
    <div>
      <button onClick={VerifyIntent}>Share on Twitter</button>
      <button onClick={() => FollowIntent("AudaXious3")}>Follow Account</button>
      <button onClick={() => LikeIntent("1763151012615925766")}>
        Like Tweet
      </button>
      <button onClick={() => RepostIntent("1763151012615925766")}>
        Repost Tweet
      </button>
    </div>
  );
};

export default TwitterShareButton;
