import axios from "axios";

export default axios.create({
  baseURL: "https://61bf13b4b25c3a00173f4c68.mockapi.io/",
  headers: {
    "Content-type": "application/json",
  },
});
