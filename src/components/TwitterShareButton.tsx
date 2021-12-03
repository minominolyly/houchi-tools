import React from "react";

export default function TwitterShareButton(props: TwitterHashtagButtonProps): JSX.Element {
  const url = props.url ? props.url : "https://houchi-tools.firebaseapp.com";
  const hashtags = props.hashtags ? props.hashtags : "";
  const size = props.size ? props.size : "";
  return (
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      className="twitter-share-button"
      data-url={url}
      data-hashtags={hashtags}
      data-size={size}
      data-show-count="false"
    >
      Tweet
    </a>
  );
}

interface TwitterHashtagButtonProps {
  url?: string | undefined;
  text?: string | undefined;
  hashtags?: string | undefined;
  size?: "large" | undefined;
}
