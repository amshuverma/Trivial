import React from "react";

import Trivia from "./Trivia";
import SearchBar from "./SearchBar";
import FilterIcon from "@/assets/icons/FilterIcon";

const trivias = [
  {
    emoji: "🎷",
    title: "Music",
    description:
      "From Beethoven to Justin Bieber, play quizzes about your favourite music.",
    link: "",
  },
  {
    emoji: "🦧",
    title: "Wildlife",
    description:
      "From Beethoven to Justin Bieber, play quizzes about your favourite music.",
    link: "",
  },
  {
    emoji: "🌍",
    title: "Geography",
    description:
      "From Beethoven to Justin Bieber, play quizzes about your favourite music.",
    link: "",
  },
  {
    emoji: "🎨",
    title: "Art",
    description:
      "From Beethoven to Justin Bieber, play quizzes about your favourite music.",
    link: "",
  },
  {
    emoji: "🏀",
    title: "Sports",
    description:
      "From Beethoven to Justin Bieber, play quizzes about your favourite music.",
    link: "",
  },
  {
    emoji: "🇺🇸",
    title: "American History",
    description:
      "From Beethoven to Justin Bieber, play quizzes about your favourite music.",
    link: "",
  },
  {
    emoji: "🎨",
    title: "Art",
    description:
      "From Beethoven to Justin Bieber, play quizzes about your favourite music.",
    link: "",
  },
];

const TriviaContainer = () => {
  return (
    <div className="min-h-full overflow-hidden">
      <div className="flex justify-between">
        <SearchBar />
        <FilterIcon />
      </div>
      <div className="mt-5 flex flex-col overflow-auto gap-[1.641rem] h-full">
        {trivias.map((trivia) => {
          return (
            <Trivia
              key={trivia.title}
              title={trivia.title}
              emoji={trivia.emoji}
              description={trivia.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TriviaContainer;
