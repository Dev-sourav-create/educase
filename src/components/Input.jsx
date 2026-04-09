const InputStyle =
  "border  border-[#CBCBCB] border-[1.5px] rounded-[6px] h-[40px] w-full text-[14px] px-[15px] focus:outline-none transition-all duration-200 focus:bg-white";
export function Input({ type, label, placeholder, required, value, onChange }) {
  return (
    <div className="relative">
      <label
        htmlFor={type}
        className="text-[13px] text-label absolute top-[-10px] left-[9px] bg-body pl-2 pr-4"
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        className={InputStyle}
        type={type}
        onChange={onChange}
        required={required}
        value={value}
        id={label}
      />
    </div>
  );
}
