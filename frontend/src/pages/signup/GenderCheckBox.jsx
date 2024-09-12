/* eslint-disable react/prop-types */
const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label cursor-pointer gap-2 ${selectedGender === "male" ? "selected" : ""}`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox-info checkbox checkbox-sm border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label cursor-pointer gap-2 ${selectedGender === "female" ? "selected" : ""}`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox-info checkbox checkbox-sm border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

// const GenderCheckBox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className="label cursor-pointer gap-2">
//           <span className="label-text">Male</span>
//           <input
//             type="checkbox"
//             className="checkbox checkbox-sm checkbox-info border-slate-900"
//           />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label cursor-pointer gap-2">
//           <span className="label-text">Female</span>
//           <input
//             type="checkbox"
//             className="checkbox checkbox-sm checkbox-info border-slate-900"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckBox;
