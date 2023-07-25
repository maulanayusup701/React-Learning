import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";
const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log("Login");
    window.location.href = "/products";
  };
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin} className="">
      <InputForm
        label="Email"
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
        ref={emailRef}
      />

      <InputForm
        label="Password"
        type="password"
        name="password"
        id="password"
        placeholder="******"
      />

      <Button classname="bg-blue-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
export default FormLogin;
