import clsx from "clsx";
const mapSizeToClassName = {
  sm: "h-[2.25rem]",
  lg: "h-[2.83rem]",
  full: "h-[2.83rem] w-full",
};
export const ButtonPrimary = ({
  size = "sm",
  type = "none",
  text,
  onClick = () => {},
  className,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        className +
          " " +
          "flex-row-center border border-[#DDA21F] drop-shadow-trivial-button rounded-trivial-default shadow-trivial-inner-1 px-6 bg-trivial-yellow-5 text-trivial-lg clash-wide font-medium text-trivial-gray-5",
        mapSizeToClassName[size]
      )}
    >
      {text}
    </button>
  );
};
