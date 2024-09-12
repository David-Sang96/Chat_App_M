import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="relative my-3 px-4">
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white"
        placeholder="Type a message..."
      />
      <button type="submit" className="absolute inset-y-0 end-7">
        <BsSend />
      </button>
    </form>
  );
};

export default MessageInput;

// const MessageInput = () => {
//   return (
//     <form className="relative my-3 px-4">
//       <input
//         type="text"
//         className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white"
//         placeholder="Type a message..."
//       />
//       <button type="submit" className="absolute inset-y-0 end-7">
//         <BsSend />
//       </button>
//     </form>
//   );
// };

// export default MessageInput;
