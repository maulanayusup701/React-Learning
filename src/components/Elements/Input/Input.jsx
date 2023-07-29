import { forwardRef, useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";
const input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  const { isDarkMode } = useContext(DarkMode);
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 ${
        isDarkMode &&
        "border-slate-900 bg-slate-950 text-white placeholder:opacity-60"
      }`}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default input;
