/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogIn from "../../hooks/useLogIn";

const LogIn = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { loading, login } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center max-md:p-4">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-center text-2xl font-semibold text-gray-300 md:text-3xl">
          Login
          <span className="text-blue-500"> TalkNest</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered h-10 w-full"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered h-10 w-full"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to={"/sign-up"}
            className="mt-2 inline-block text-sm duration-300 hover:text-blue-600 hover:underline"
          >
            Don't have an account?
          </Link>
          <div>
            <button className="btn btn-sm btn-block mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

// const LogIn = () => {
//   return (
//     <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
//       <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
//         <h1 className="text-center text-3xl font-semibold text-gray-300">
//           Login
//           <span className="text-blue-500"> TalkNest</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="label-text text-base">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="input input-bordered h-10 w-full"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="label-text text-base">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="input input-bordered h-10 w-full"
//             />
//           </div>
//           <Link
//             to={"/sign-up"}
//             className="mt-2 inline-block text-sm duration-300 hover:text-blue-600 hover:underline"
//           >
//             Don't have an account?
//           </Link>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LogIn;
