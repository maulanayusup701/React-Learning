import AuthLayout from "../components/Layouts/authLayouts";
import FormLogin from "../components/Fragment/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = (props) => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have an account?
        {/*link is for client side routing */}
        <Link to="/register" className="font-bold text-blue-600">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};
export default LoginPage;
