import { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../store/useConversation";
import MobileLogoutButton from "./MobileLogoutButton";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") return;
    if (search.length < 3) {
      return toast.error("Type at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      setSearch("");
      toast.error("No user found!");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <form className="flex items-center md:gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input-sm input-bordered rounded-full md:input-md max-md:text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="btn-circle btn-sm bg-sky-500 text-white md:btn-md"
        >
          <IoSearchSharp className="mx-auto size-4 outline-none md:size-6" />
        </button>
      </form>
      <MobileLogoutButton />
    </div>
  );
};

export default SearchInput;

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <IoSearchSharp className="size-6 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
