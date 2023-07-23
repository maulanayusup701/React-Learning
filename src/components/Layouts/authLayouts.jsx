import { Link } from "react-router-dom";
const authLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-2">
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
  return type === "login" ? (
    <p className="text-sm mt-5 text-center">
      Don't have an account?{" "}
      <Link to="/register" className="font-bold text-blue-600">
        Sign up
      </Link>
    </p>
  ) : (
    <p className="text-sm mt-5 text-center">
      Already have an account?{" "}
      <Link to="/login" className="font-bold text-blue-600">
        Log in
      </Link>
    </p>
  );
};
