import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
const FormLogin = () => {
  return (
    <form action="" className="">
      <InputForm
        label="Email"
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
      />

      <InputForm
        label="Password"
        type="password"
        name="password"
        id="password"
        placeholder="******"
      />

      <Button classname="bg-blue-500 w-full">Login</Button>
    </form>
  );
};
export default FormLogin;
