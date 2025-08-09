import ky from "ky";

export const api = ky.create({
  prefixUrl: "https://api.seoulmoment.com.tw",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
