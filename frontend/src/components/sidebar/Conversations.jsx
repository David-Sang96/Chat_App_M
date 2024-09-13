import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../ultis/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto py-2">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;

// const Conversations = () => {
//   return (
//     <div className="flex flex-col overflow-auto py-2">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };

// export default Conversations;
