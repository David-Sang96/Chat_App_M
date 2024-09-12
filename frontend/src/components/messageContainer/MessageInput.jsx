import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="relative my-3 px-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="absolute inset-y-0 end-7"
        disabled={loading}
      >
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <BsSend />
        )}
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
