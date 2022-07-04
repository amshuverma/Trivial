import React from "react";

import Trivia from "./Trivia";

const trivias = [
  {
    emoji: "🏀",
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit",
    link: "",
  },
  {
    emoji: "🦧",
    title: "Wildlife",
    description:
      "Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit",
    link: "",
  },
  {
    emoji: "🌍",
    title: "Geography",
    description:
      "Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit",
    link: "",
  },
  {
    emoji: "🎨",
    title: "Art",
    description:
      "Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit",
    link: "",
  },
];

const TriviaContainer = () => {
  return (
    <div className="flex flex-col gap-[1.641rem] overflow-auto">
      {trivias.map((trivia, index) => {
        return (
          <Trivia
            title={trivia.title}
            emoji={trivia.emoji}
            description={trivia.description}
          />
        );
      })}
    </div>
  );
};

export default TriviaContainer;
