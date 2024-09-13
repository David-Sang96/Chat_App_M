import MessageContainer from "../../components/messageContainer/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding backdrop-blur-lg backdrop-filter max-md:w-full md:h-[550px] md:flex-row">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
