import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed();
        console.log(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin} className="">
      <InputForm
        label="Username"
        type="text"
        name="username"
        id="username"
        placeholder="Jhon Doe"
        ref={usernameRef}
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
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};
export default FormLogin;
