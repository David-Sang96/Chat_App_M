import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSIngUp";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { signUp, loading } = useSignUp();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
    // toast.success("Register Successfully");
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          Sign Up
          <span className="text-blue-500"> TalkNest</span>
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Steve John"
              className="input input-bordered h-10 w-full"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="stevejohn"
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
          <div>
            <label className="label">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered h-10 w-full"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to={"/log-in"}
            className="mt-2 inline-block text-sm duration-300 hover:text-blue-600 hover:underline"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-sm btn-block mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// const SignUp = () => {
//   return (
//     <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
//       <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
//         <h1 className="text-center text-3xl font-semibold text-gray-300">
//           Sign Up
//           <span className="text-blue-500"> TalkNest</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="label-text text-base">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Steve John"
//               className="input input-bordered h-10 w-full"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="label-text text-base">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="stevejohn"
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
//           <div>
//             <label className="label">
//               <span className="label-text text-base">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               className="input input-bordered h-10 w-full"
//             />
//           </div>
//           <GenderCheckBox />
//           <Link
//             to={"/log-in"}
//             className="mt-2 inline-block text-sm duration-300 hover:text-blue-600 hover:underline"
//           >
//             Already have an account?
//           </Link>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
