// export default function MetricsCards({
//   burnRate,
//   renewals
// }) {
//   return (
//     <div className="grid md:grid-cols-2 gap-4 mb-6">
//       <div className="bg-white shadow rounded-xl p-5">
//         <h3 className="text-gray-500">
//           Monthly Burn Rate
//         </h3>

//         <p className="text-3xl font-bold">
//           ₹{burnRate}
//         </p>
//       </div>

//       <div className="bg-white shadow rounded-xl p-5">
//         <h3 className="text-gray-500">
//           Upcoming Renewals
//         </h3>

//         <p className="text-3xl font-bold">
//           {renewals}
//         </p>
//       </div>
//     </div>
//   );
// }








export default function MetricsCards({
  burnRate,
  renewals,
}) {
  return (
    <div className="grid md:grid-cols-2 gap-5 mb-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
        <p className="text-sm text-slate-500">
          Monthly Burn Rate
        </p>

        <h2 className="text-3xl font-bold mt-2 text-red-500">
          ₹{Number(burnRate).toFixed(2)}
        </h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
        <p className="text-sm text-slate-500">
          Upcoming Renewals
        </p>

        <h2 className="text-3xl font-bold mt-2 text-amber-500">
          {renewals}
        </h2>
      </div>
    </div>
  );
}