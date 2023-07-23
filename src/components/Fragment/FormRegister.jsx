import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
const FormLogin = () => {
  return (
    <form action="" className="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Insert your fullname"
      />
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

      <InputForm
        label="Confirm Password"
        type="confirm-password"
        name="confirm-password"
        id="confirm-password"
        placeholder="******"
      />

      <Button classname="bg-blue-500 w-full">Register</Button>
    </form>
  );
};
export default FormLogin;
