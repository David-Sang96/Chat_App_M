import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut";

const LogoutButton = () => {
  const { loading, logOut } = useLogOut();

  return (
    <div className="mt-auto">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <BiLogOut
          className="size-6 cursor-pointer text-white"
          onClick={logOut}
        />
      )}
    </div>
  );
};

export default LogoutButton;
