export default function MetricsCards({
  burnRate,
  renewals
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white shadow rounded-xl p-5">
        <h3 className="text-gray-500">
          Monthly Burn Rate
        </h3>

        <p className="text-3xl font-bold">
          ₹{burnRate}
        </p>
      </div>

      <div className="bg-white shadow rounded-xl p-5">
        <h3 className="text-gray-500">
          Upcoming Renewals
        </h3>

        <p className="text-3xl font-bold">
          {renewals}
        </p>
      </div>
    </div>
  );
}