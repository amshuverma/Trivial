import { PlayIcon } from "@/assets/icons";

const Trivia = ({
  emoji = "🏀",
  title = "Sports",
  description = "Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit",
  link,
}) => {
  return (
    <div className="trivial-gradient relative w-[36.469rem] h-[5.906rem] rounded-[7.5px] mb-[2rem]">
      <div className="flex items-center pt-2">
        <div className="flex flex-row pl-[1.453rem] pr-[1.688rem]">
          <p className=" text-trivial-emoji-lg">{emoji}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="clash-wide font-medium text-trivial-lg">{title}</h2>
          <p className="line-clamp-2 mt-[2px] font-normal inter-tight max-w-[16.219rem] text-trivial-md text-trivial-gray-4">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-[0.9rem] right-[0.9rem]">
        <PlayIcon />
      </div>
    </div>
  );
};

export default Trivia;
