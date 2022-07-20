import clsx from "clsx";
const mapSizeToClassName = {
  sm: "h-[2.25rem]",
  lg: "h-[2.83rem]",
};
export const ButtonPrimary = ({
  size = "sm",
  text,
  type = "none",
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex-row-center border border-[#DDA21F] drop-shadow-trivial-button rounded-trivial-default shadow-trivial-inner-1 px-6 bg-trivial-yellow-5 text-trivial-md clash-wide font-medium text-trivial-gray-5",
        mapSizeToClassName[size]
      )}
    >
      {text}
    </button>
  );
};
