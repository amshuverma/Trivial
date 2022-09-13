export const Input = ({
  label,
  icon,
  register,
  required = false,
  onChange = () => {},
  placeholder = "",
  type = "text",
  className,
  value,
  name,
}) => {
  return (
    <div className={className}>
      <label className="ml-0.5 font-inter text-trivial-sm text-trivial-gray-5">
        {label}
      </label>
      <div className="h-[2.83rem] relative flex items-center w-[20.531rem] rounded-trivial-default bg-trivial-yellow-1 border border-trivial-yellow-2">
        <div className="absolute top-2.5 left-3">{icon}</div>
        <input
          name={name}
          onChange={onChange}
          value={value}
          required
          type={type}
          className="focus:outline-none focus:ring-trivial-yellow-6 focus:ring-1 shadow-inner rounded-trivial-default h-full w-full bg-inherit border-none text-sm placeholder:text-sm placeholder:text-trivial-gray-5 placeholder:opacity-25 px-11 pt-0.5"
          placeholder={placeholder}
          // {...register(label, { required })}
        />
      </div>
    </div>
  );
};
