import AuthLayout from "../components/Layouts/authLayouts";
import FormLogin from "../components/Fragment/FormLogin";
const LoginPage = (props) => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
};
export default LoginPage;
