import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";
const Label = (props) => {
  const { htmlFor, children } = props;
  const { isDarkMode } = useContext(DarkMode);
  return (
    <label
      htmlFor={htmlFor}
      className={`"block text-slate-700 text-sm font-bold mb-2 ${
        isDarkMode && "text-gray-300"
      }`}
    >
      {children}
    </label>
  );
};
export default Label;
