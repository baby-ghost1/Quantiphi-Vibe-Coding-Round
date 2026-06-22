// export default function SubscriptionTable({
//   subscriptions,
//   onToggle
// }) {
//   return (
//     <div className="bg-white shadow rounded-xl overflow-x-auto">
//       <table className="w-full">
//         <thead>
//           <tr className="border-b">
//             <th className="p-3">
//               Service
//             </th>
//             <th>Cost</th>
//             <th>Cycle</th>
//             <th>Renewal</th>
//             <th>Status</th>
//             <th>Badge</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {subscriptions.map((sub) => (
//             <tr
//               key={sub.id}
//               className={`border-b ${
//                 !sub.active
//                   ? "bg-gray-200 text-gray-500"
//                   : ""
//               }`}
//             >
//               <td className="p-3">
//                 {sub.serviceName}
//               </td>

//               <td>
//                 ₹{sub.cost}
//               </td>

//               <td>
//                 {sub.billingCycle}
//               </td>

//               <td>
//                 {sub.renewalDate}
//               </td>

//               <td>
//                 {sub.active
//                   ? "Active"
//                   : "Paused"}
//               </td>

//               <td>
//                 {sub.renewingSoon && (
//                   <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-sm">
//                     Renewing Soon
//                   </span>
//                 )}
//               </td>

//               <td>
//                 <button
//                   onClick={() =>
//                     onToggle(sub.id)
//                   }
//                   className="bg-blue-600 text-white px-3 py-1 rounded"
//                 >
//                   {sub.active
//                     ? "Pause"
//                     : "Activate"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



export default function SubscriptionTable({
  subscriptions,
  onToggle,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">
                Service Name
              </th>

              <th className="px-4 py-3 text-left">
                Cost
              </th>

              <th className="px-4 py-3 text-left">
                Billing Cycle
              </th>

              <th className="px-4 py-3 text-left">
                Renewal Date
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>

              <th className="px-4 py-3 text-left">
                Alert
              </th>

              <th className="px-4 py-3 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {subscriptions.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-slate-500"
                >
                  No subscriptions added yet.
                </td>
              </tr>
            )}

            {subscriptions.map((sub) => (
              <tr
                key={sub.id}
                className={`border-t transition ${
                  !sub.active
                    ? "bg-slate-100 text-slate-500"
                    : ""
                }`}
              >
                <td className="px-4 py-4 font-medium">
                  {sub.serviceName}
                </td>

                <td className="px-4 py-4">
                  ₹{sub.cost}
                </td>

                <td className="px-4 py-4">
                  {sub.billingCycle}
                </td>

                <td className="px-4 py-4">
                  {sub.renewalDate}
                </td>

                <td className="px-4 py-4">
                  {sub.active ? (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-600">
                      Paused
                    </span>
                  )}
                </td>

                <td className="px-4 py-4">
                  {sub.renewingSoon && (
                    <span className="bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full">
                      Renewing Soon
                    </span>
                  )}
                </td>

                <td className="px-4 py-4">
                  <button
                    onClick={() =>
                      onToggle(sub.id)
                    }
                    className={`px-4 py-2 rounded-lg text-white transition ${
                      sub.active
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {sub.active
                      ? "Pause"
                      : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}