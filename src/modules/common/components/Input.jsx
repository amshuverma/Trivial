import { UserIcon } from "@/assets/icons";

export const Input = ({
  label,
  icon,
  register,
  required = false,
  type = "text",
}) => {
  return (
    <div>
      <label className="ml-0.5 font-inter text-trivial-sm text-trivial-gray-5">
        {label}
      </label>
      <div className="mt-1 h-[2.83rem] relative flex items-center w-[20.531rem] rounded-trivial-default bg bg-trivial-yellow-1 border border-trivial-yellow-2">
        <div className="absolute top-2.5 left-3">
          <UserIcon />
        </div>
        <input
          required
          type={type}
          className="focus:outline-none focus:ring-trivial-yellow-6 focus:ring-1 shadow-inner rounded-trivial-default h-full w-full bg-inherit border-none text-sm placeholder:text-sm placeholder:text-trivial-gray-5 placeholder:opacity-25 px-11 pt-0.5"
          placeholder="Eg: Arthur of Camelot"
          // {...register(label, { required })}
        />
      </div>
    </div>
  );
};
