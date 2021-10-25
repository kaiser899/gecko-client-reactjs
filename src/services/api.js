import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: { Accept: "application/json" },
});

const buildParams = (params) => {
  if (params === undefined) return "";
  const arr = [];
  Object.keys(params).forEach((k) => {
    if (params[k] !== undefined) arr.push(`${k}=${params[k]}`);
  });
  return "?" + arr.join("&");
};

export const getCoinsMarket = async (params) => {
  let isValid = params !== undefined;
  if (params) {
    const paramsArray = Object.keys(params);
    isValid = paramsArray.includes("vs_currency");
  }
  if (isValid) {
    const parsedParams = buildParams(params);
    try {
      const res = await instance.get(`/coins/markets${parsedParams}`);
      return { data: res.data };
    } catch (error) {
      return { error };
    }
  } else {
    return {
      error: "Invalid call parameters",
    };
  }
};
