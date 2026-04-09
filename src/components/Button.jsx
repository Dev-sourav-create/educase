const defaultStyle =
  "w-full text-center text-[16px] h-[46px] w-[335px] rounded-[6px] mb-2.5 font-medium";
const variants = {
  primary: "bg-primaryBtn text-white cursor-pointer",
  secondary: "bg-[#cebafb] text-primary cursor-pointer",
  diabled: "bg-[#cacacb] text-white cursor-not-allowed",
};

export function Button({ btnName, disabled, type, category, className = "" }) {
  const variantStyle = disabled
    ? variants.diabled
    : (variants[category] ?? variants.secondary);

  return (
    <button
      className={` ${variantStyle} ${defaultStyle} ${className}`}
      type={type}
      disabled={disabled}
    >
      {btnName}
    </button>
  );
}
