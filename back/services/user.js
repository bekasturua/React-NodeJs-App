import axios from "axios";
import { v4 as uuid } from "uuid";

export async function getUsers() {
  const res = await axios.get(process.env.FIREBASE_URL + "users.json");
  return res.data;
}

export async function addUser(user) {
  const res = await axios.post(process.env.FIREBASE_URL + "users.json", {
    ...user,
    id: uuid(),
  });
  return res.data;
}
