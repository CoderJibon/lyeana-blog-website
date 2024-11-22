import { create, findByID } from "@/firebase/models.js";
import { serverTimestamp } from "firebase/firestore";

// create a user
export const createUserDoc = async (data, id = null) => {
  const userDoc = await findByID("users", data.id);
  if (!userDoc) {
    await create(
      "users",
      {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: null,
      },
      id
    );
  }

  return { message: "login successfully" };
};
