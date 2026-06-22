import axios from "axios";

const API =
  "http://localhost:5000/api/subscriptions";

export const getSubscriptions = () =>
  axios.get(API);

export const createSubscription = (
  payload
) => axios.post(API, payload);

export const toggleSubscription = (
  id
) => axios.patch(`${API}/${id}/toggle`);