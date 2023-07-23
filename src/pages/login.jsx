import AuthLayout from "../components/Layouts/authLayouts";
import FormLogin from "../components/Fragment/FormLogin";

const LoginPage = (props) => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};
export default LoginPage;
