import { ModalCloseIcon, UserIcon } from "@/assets/icons";
import { useForm } from "@/libs/react-hook-form";

const UpdateProfileModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-gray-800 bg-opacity-20 flex justify-center">
      <div className="px-[1.734rem] pt-[1.734rem] w-[23.859rem] flex flex-col h-[33.469rem] border border-trivial-yellow-2 drop-shadow-sm bg-white opacity-100 mt-20 rounded-trivial-default">
        <div className="bg-red-500">
          <ModalCloseIcon />
        </div>
        <div className="bg-green-300 w-full flex justify-between items-center">
          <h2 className="clash-wide font-medium text-trivial-gray-5">
            Update profile
          </h2>
          <p className="bg-trivial-gray-1 px-2 py-1 rounded-trivial-default">
            🔌
          </p>
        </div>
        <UserIcon />
        <form action="">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
