const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-info border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-info border-slate-900"
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
