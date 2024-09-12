import { TiMessages } from "react-icons/ti";

import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="mb-2 bg-slate-500 px-4 py-2">
            <span className="label-text font-semibold">To: </span>{" "}
            <span className="font-bold text-gray-900">Steve John</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 px-4 text-center font-semibold text-gray-200 sm:text-lg md:text-xl">
        <p>Welcome 👋🏼 Steve John 🌸</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-center text-3xl md:text-6xl" />
      </div>
    </div>
  );
};

// const MessageContainer = () => {
//   return (
//     <div className="flex flex-col md:min-w-[450px]">
//       <>
//         {/* Header */}
//         <div className="mb-2 bg-slate-500 px-4 py-2">
//           <span className="label-text font-semibold">To: </span>{" "}
//           <span className="font-bold text-gray-900">Steve John</span>
//         </div>
//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   );
// };

// export default MessageContainer;
