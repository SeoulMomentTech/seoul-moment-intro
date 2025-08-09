import ky from "ky";

export const api = ky.create({
  prefixUrl:
    "http://ec2-3-38-251-105.ap-northeast-2.compute.amazonaws.com:9008",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
