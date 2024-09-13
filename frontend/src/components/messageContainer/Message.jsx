/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

const Message = ({ chatMessages }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = chatMessages.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe && "bg-blue-500";
  const shakeClass = chatMessages.shouldShake && "shake";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {chatMessages.message}
      </div>
      <div className="chat-footer mt-1 flex items-center gap-1 text-xs opacity-50">
        {format(chatMessages.createdAt, "h:mm a")}
      </div>
    </div>
  );
};

export default Message;

// const Message = () => {
//   return (
//     <div className={`chat chat-end`}>
//       <div className="avatar chat-image">
//         <div className="w-10 rounded-full">
//           <img
//             src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//             alt="user avatar"
//           />
//         </div>
//       </div>
//       <div className={`chat-bubble bg-blue-500 text-white`}>
//         Hi! what's up ?
//       </div>
//       <div className="chat-footer mt-1 flex items-center gap-1 text-xs opacity-50">
//         12:42
//       </div>
//     </div>
//   );
// };

// export default Message;
