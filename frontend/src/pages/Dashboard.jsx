// import { useEffect, useState } from "react";

// import SubscriptionForm from "../components/SubscriptionForm.jsx";
// import MetricsCards from "../components/MetricsCards.jsx";
// import SubscriptionTable from "../components/SubscriptionTable.jsx";
// import LoadingSpinner from "../components/LoadingSpinner.jsx";
// import ErrorMessage from "../components/ErrorMessage.jsx";

// import {
//   getSubscriptions,
//   createSubscription,
//   toggleSubscription
// } from "../services/api";

// export default function Dashboard() {
//   const [data, setData] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState("");

//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const res =
//         await getSubscriptions();

//       setData(res.data);

//       setError("");
//     } catch {
//       setError(
//         "Failed to load subscriptions"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const addHandler = async (
//     payload
//   ) => {
//     await createSubscription(
//       payload
//     );

//     fetchData();
//   };

//   const toggleHandler =
//     async (id) => {
//       await toggleSubscription(id);

//       fetchData();
//     };

//   if (loading)
//     return <LoadingSpinner />;

//   if (error)
//     return (
//       <ErrorMessage
//         message={error}
//       />
//     );

//   return (
//     <div className="max-w-6xl mx-auto p-5">
//       <h1 className="text-3xl font-bold mb-6">
//         Subscription Dashboard
//       </h1>

//       <SubscriptionForm
//         onAdd={addHandler}
//       />

//       <MetricsCards
//         burnRate={
//           data.monthlyBurnRate
//         }
//         renewals={
//           data.upcomingRenewals
//         }
//       />

//       <SubscriptionTable
//         subscriptions={
//           data.subscriptions
//         }
//         onToggle={
//           toggleHandler
//         }
//       />
//     </div>
//   );
// }



import { useEffect, useState } from "react";

import SubscriptionForm from "../components/SubscriptionForm";
import MetricsCards from "../components/MetricsCards";
import SubscriptionTable from "../components/SubscriptionTable";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

import {
  getSubscriptions,
  createSubscription,
  toggleSubscription,
} from "../services/api";

export default function Dashboard() {
  const [data, setData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchData = async () => {
    try {
      setLoading(true);

      const res =
        await getSubscriptions();

      setData(res.data);

      setError("");
    } catch (err) {
      setError(
        err.message ||
          "Failed to load subscriptions"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addHandler = async (
    payload
  ) => {
    await createSubscription(
      payload
    );
    fetchData();
  };

  const toggleHandler =
    async (id) => {
      await toggleSubscription(id);
      fetchData();
    };

  if (loading)
    return <LoadingSpinner />;

  if (error)
    return (
      <ErrorMessage
        message={error}
      />
    );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Subscription Tracker
          </h1>

          <p className="text-slate-500 mt-2">
            Track recurring
            subscriptions and
            monitor monthly
            spending.
          </p>

          <p className="text-sm text-slate-400 mt-1">
            Total Subscriptions:{" "}
            {
              data.subscriptions
                .length
            }
          </p>
        </div>

        <SubscriptionForm
          onAdd={addHandler}
        />

        <MetricsCards
          burnRate={
            data.monthlyBurnRate
          }
          renewals={
            data.upcomingRenewals
          }
        />

        <SubscriptionTable
          subscriptions={
            data.subscriptions
          }
          onToggle={
            toggleHandler
          }
        />
      </div>
    </div>
  );
}