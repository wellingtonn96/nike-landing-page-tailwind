const Button = ({ label, iconURL = undefined, variant = "primary" }) => {
  return (
    <button
      className={
        variant === "primary"
          ? "flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border-coral-red bg-coral-red rounded-full text-white"
          : variant === "secondary" &&
            "flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-white rounded-full text-slate-gray border border-slate-gray"
      }
    >
      {label}
      {iconURL && (
        <img
          alt="arrow right icon"
          src={iconURL}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};
export default Button;
