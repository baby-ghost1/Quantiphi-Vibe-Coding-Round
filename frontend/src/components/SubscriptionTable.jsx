export default function SubscriptionTable({
  subscriptions,
  onToggle
}) {
  return (
    <div className="bg-white shadow rounded-xl overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-3">
              Service
            </th>
            <th>Cost</th>
            <th>Cycle</th>
            <th>Renewal</th>
            <th>Status</th>
            <th>Badge</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {subscriptions.map((sub) => (
            <tr
              key={sub.id}
              className={`border-b ${
                !sub.active
                  ? "bg-gray-200 text-gray-500"
                  : ""
              }`}
            >
              <td className="p-3">
                {sub.serviceName}
              </td>

              <td>
                ₹{sub.cost}
              </td>

              <td>
                {sub.billingCycle}
              </td>

              <td>
                {sub.renewalDate}
              </td>

              <td>
                {sub.active
                  ? "Active"
                  : "Paused"}
              </td>

              <td>
                {sub.renewingSoon && (
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-sm">
                    Renewing Soon
                  </span>
                )}
              </td>

              <td>
                <button
                  onClick={() =>
                    onToggle(sub.id)
                  }
                  className="bg-blue-600 text-white px-3 py-1 rounded"
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
  );
}