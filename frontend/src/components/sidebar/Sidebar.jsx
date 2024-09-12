import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-slate-500 p-4">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col border-r border-slate-500 p-4">
//       <SearchInput />
//       <div className="divider px-3" />
//       <Conversations />
//       <LogoutButton />
//     </div>
//   );
// };

// export default Sidebar;
