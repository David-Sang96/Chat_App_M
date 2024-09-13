import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut";

const MobileLogoutButton = () => {
  const { loading, logOut } = useLogOut();

  return (
    <div className="block md:hidden">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <BiLogOut
          className="size-7 cursor-pointer text-white"
          onClick={logOut}
        />
      )}
    </div>
  );
};

export default MobileLogoutButton;
