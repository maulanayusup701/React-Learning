import { useLogin } from "../hooks/useLogin";

const profilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>Profile</h1>
      username: {username}
    </div>
  );
};

export default profilePage;
