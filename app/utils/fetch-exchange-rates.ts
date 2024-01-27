"use server";
import axios from "axios";

export type TExchangeRates =  {
  amount: number;
  from: string;
  to: string;
  timestamp: number;
  base: string;
  date: string;
  success: boolean;
  value: number;
}

export type TFetchExchangeRatesArgs = {
  from: string;
  to: string;
  amount: number | string;
}
export const fetchExchangeRates = async ({ from, to, amount } : TFetchExchangeRatesArgs ): Promise<TExchangeRates> => {
  const apiKey = process.env.API_KEY;
  const url = `https://api.currencybeacon.com/v1/convert?from=${from.toUpperCase()}&to=${to.toUpperCase()}&amount=${amount}&api_key=${apiKey}`;
  const response = await axios.get<TExchangeRates>(url);
  return response.data;
};
