export const ButtonSecondary = ({
  text,
  type = "none",
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className="h-[2.25rem] flex-row-center border border-trivial-gray-5 drop-shadow-trivial-button rounded-trivial-default shadow-trivial-inner-2 px-6 bg-trivial-gray-5 text-trivial-gray-1 text-trivial-md clash-wide font-medium"
    >
      {text}
    </button>
  );
};
