
import axios from "axios";

export const get200Coins = () => {
  const coins = axios
    .get(
      import.meta.env.VITE_GET_ALL
    )
    .then((response) => {
      console.log("RESPONSE>>>", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
    });

  return coins;
};
