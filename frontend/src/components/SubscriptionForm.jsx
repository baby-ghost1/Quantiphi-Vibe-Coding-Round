// import { useState } from "react";

// export default function SubscriptionForm({
//   onAdd
// }) {
//   const [form, setForm] = useState({
//     serviceName: "",
//     cost: "",
//     billingCycle: "Monthly",
//     renewalDate: ""
//   });

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (
//       !form.serviceName ||
//       !form.cost ||
//       !form.renewalDate
//     ) {
//       return alert(
//         "Please fill all fields"
//       );
//     }

//     onAdd(form);

//     setForm({
//       serviceName: "",
//       cost: "",
//       billingCycle: "Monthly",
//       renewalDate: ""
//     });
//   };

//   return (
//     <form
//       onSubmit={submitHandler}
//       className="bg-white p-6 rounded-xl shadow mb-6"
//     >
//       <div className="grid md:grid-cols-4 gap-4">
//         <input
//           className="border p-2 rounded"
//           placeholder="Service Name"
//           value={form.serviceName}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               serviceName:
//                 e.target.value
//             })
//           }
//         />

//         <input
//           type="number"
//           className="border p-2 rounded"
//           placeholder="Cost"
//           value={form.cost}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               cost: e.target.value
//             })
//           }
//         />

//         <select
//           className="border p-2 rounded"
//           value={form.billingCycle}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               billingCycle:
//                 e.target.value
//             })
//           }
//         >
//           <option>Monthly</option>
//           <option>Yearly</option>
//         </select>

//         <input
//           type="date"
//           className="border p-2 rounded"
//           value={form.renewalDate}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               renewalDate:
//                 e.target.value
//             })
//           }
//         />
//       </div>

//       <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
//         Add Subscription
//       </button>
//     </form>
//   );
// }





import { useState } from "react";

export default function SubscriptionForm({
  onAdd,
}) {
  const [form, setForm] = useState({
    serviceName: "",
    cost: "",
    billingCycle: "Monthly",
    renewalDate: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !form.serviceName ||
      !form.cost ||
      !form.renewalDate
    ) {
      alert("Please fill all fields");
      return;
    }

    if (Number(form.cost) <= 0) {
      alert("Cost must be greater than 0");
      return;
    }

    onAdd(form);

    setForm({
      serviceName: "",
      cost: "",
      billingCycle: "Monthly",
      renewalDate: "",
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6"
    >
      <h2 className="text-lg font-semibold mb-4">
        Add Subscription
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Service Name"
          value={form.serviceName}
          onChange={(e) =>
            setForm({
              ...form,
              serviceName: e.target.value,
            })
          }
          className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Cost"
          value={form.cost}
          onChange={(e) =>
            setForm({
              ...form,
              cost: e.target.value,
            })
          }
          className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={form.billingCycle}
          onChange={(e) =>
            setForm({
              ...form,
              billingCycle: e.target.value,
            })
          }
          className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Monthly</option>
          <option>Yearly</option>
        </select>

        <input
          type="date"
          value={form.renewalDate}
          onChange={(e) =>
            setForm({
              ...form,
              renewalDate: e.target.value,
            })
          }
          className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        Add Subscription
      </button>
    </form>
  );
}