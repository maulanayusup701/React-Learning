import AuthLayout from "../components/Layouts/authLayouts";
import FormRegister from "../components/Fragment/FormRegister";

const RegisterPage = (props) => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};
export default RegisterPage;
