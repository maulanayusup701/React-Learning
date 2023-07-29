import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button";
const authLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <Button
          classname="absolute right-2 top-2 bg-black p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </Button>
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p
          className={`font-medium text-slate-500 mb-2 ${
            isDarkMode && " text-gray-400 mb-2"
          }`}
        >
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

export default authLayout;

const Navigation = ({ type }) => {
  const { isDarkMode } = useContext(DarkMode);
  return type === "login" ? (
    <p className={`text-sm mt-5 text-center ${isDarkMode && "text-gray-400"}`}>
      Don't have an account?{" "}
      <Link to="/register" className="font-bold text-blue-600">
        Sign up
      </Link>
    </p>
  ) : (
    <p className={`text-sm mt-5 text-center ${isDarkMode && "text-gray-400"}`}>
      Already have an account?{" "}
      <Link to="/login" className="font-bold text-blue-600">
        Log in
      </Link>
    </p>
  );
};
