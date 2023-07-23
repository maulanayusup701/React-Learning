import AuthLayout from "../components/Layouts/authLayouts";
import FormRegister from "../components/Fragment/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = (props) => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Don't have an account?
        {/*link is for client side routing */}
        <Link to="/login" className="font-bold text-blue-600">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
};
export default RegisterPage;
