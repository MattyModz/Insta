import React from "react";

const highlightHashtags = (text: string): React.ReactNode[] => {
  const hashtagRegex = /#[^\s#]+/g;
  const AppUrl: string | undefined = process.env.REACT_APP_URL;

  if (AppUrl) {
    throw new Error("API URL not defined");
  }

  const parts: React.ReactNode[] = text.split(/(\s+)/).map((part, index) => {
    return part.match(hashtagRegex) ? (
      <a
        key={index}
        href={`${AppUrl}/${part.substring(1)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </a>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    );
  });

  return parts;
};

export default highlightHashtags;
