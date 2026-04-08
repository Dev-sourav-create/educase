const defaultStyle = "w-full text-center h-[48px]";
const variants = {
  primary: "bg-[#6d25fe] text-white cursor-pointer",
  secondary: "bg-[#cebafb] text-primary cursor-pointer",
  diabled: "bg-[#cacacb] text-white cursor-not-allowed",
};

export function Button({ btnName, diabled, type, category, className = "" }) {
  const variantStyle = diabled
    ? variants.diabled
    : (variants[category] ?? variants.secondary);

  return (
    <button
      className={` ${variantStyle} ${defaultStyle} ${className}`}
      type={type}
      disabled={diabled}
    >
      {btnName}
    </button>
  );
}
