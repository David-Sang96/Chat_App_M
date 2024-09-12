const Conversation = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:bg-sky-500">
        <div className={`avatar online`}>
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="font-bold text-gray-200">Steve John</p>
            <span className="text-xl">🧖🏼‍♀️</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 h-1 py-0" />
    </>
  );
};

export default Conversation;

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:bg-sky-500">
//         <div className={`avatar online`}>
//           <div className="w-12 rounded-full">
//             <img
//               src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//               alt="user avatar"
//             />
//           </div>
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between">
//             <p className="font-bold text-gray-200">Steve John</p>
//             <span className="text-xl">🧖🏼‍♀️</span>
//           </div>
//         </div>
//       </div>
//       <div className="divider my-0 h-1 py-0" />
//     </>
//   );
// };

// export default Conversation;
