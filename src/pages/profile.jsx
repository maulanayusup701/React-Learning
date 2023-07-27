import Navbar from "../components/Fragment/Navbar";
import { useLogin } from "../hooks/useLogin";

const profilePage = () => {
  const username = useLogin();
  return (
    <>
      <Navbar />
      <div>
        <h1>Profile</h1>
        username: {username}
      </div>
    </>
  );
};

export default profilePage;
