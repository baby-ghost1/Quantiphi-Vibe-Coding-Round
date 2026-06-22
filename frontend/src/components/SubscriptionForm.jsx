import { useState } from "react";

export default function SubscriptionForm({
  onAdd
}) {
  const [form, setForm] = useState({
    serviceName: "",
    cost: "",
    billingCycle: "Monthly",
    renewalDate: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !form.serviceName ||
      !form.cost ||
      !form.renewalDate
    ) {
      return alert(
        "Please fill all fields"
      );
    }

    onAdd(form);

    setForm({
      serviceName: "",
      cost: "",
      billingCycle: "Monthly",
      renewalDate: ""
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-6 rounded-xl shadow mb-6"
    >
      <div className="grid md:grid-cols-4 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Service Name"
          value={form.serviceName}
          onChange={(e) =>
            setForm({
              ...form,
              serviceName:
                e.target.value
            })
          }
        />

        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Cost"
          value={form.cost}
          onChange={(e) =>
            setForm({
              ...form,
              cost: e.target.value
            })
          }
        />

        <select
          className="border p-2 rounded"
          value={form.billingCycle}
          onChange={(e) =>
            setForm({
              ...form,
              billingCycle:
                e.target.value
            })
          }
        >
          <option>Monthly</option>
          <option>Yearly</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded"
          value={form.renewalDate}
          onChange={(e) =>
            setForm({
              ...form,
              renewalDate:
                e.target.value
            })
          }
        />
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add Subscription
      </button>
    </form>
  );
}