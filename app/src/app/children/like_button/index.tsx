import React from "react";
import { useState } from "react";
import UnlikedIcon from "./children/unliked_icon";
import LikedIcon from "./children/liked_icon";
import { Button } from "../../ui/Button";

interface LikeButtonProps {
  likecallback: (isLiked: boolean) => void;
  height: string;
  width: string;
  liked: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  likecallback,
  height,
  width,
  liked,
}: LikeButtonProps) => {
  const [isLiked, setisLiked] = useState(liked);

  const toggleLikeCallback = () => {
    const updatedIsLiked = !isLiked;
    setisLiked(updatedIsLiked);
    likecallback(updatedIsLiked);
  };

  const renderIcon = (isLiked: boolean) => {
    if (isLiked === true) {
      return <LikedIcon height={height} width={width} />;
    } else {
      return <UnlikedIcon height={height} width={width} />;
    }
  };

  return (
    <>
      <Button
        style={{ border: "none", background: "none" }}
        onClick={toggleLikeCallback}
        size={"Image_Like"}
        variant={"Image_Like"}
      >
        {renderIcon(isLiked)}
      </Button>
    </>
  );
};

export default LikeButton;
