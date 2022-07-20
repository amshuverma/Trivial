export const ModalCloseIcon = ({ onClose = () => {} }) => {
  return (
    <div onClick={onClose} className=" rounded-full w-3 h-3 bg-red-400"></div>
  );
};
