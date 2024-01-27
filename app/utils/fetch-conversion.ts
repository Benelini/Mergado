"use server";
import axios from "axios";

export type TConversion = {
  amount: number;
  from: string;
  to: string;
  timestamp: number;
  base: string;
  date: string;
  success: boolean;
  value: number;
}

export type TFetchConversionArgs = {
  from: string;
  to: string;
  amount: number | string;
}
export const fetchConversion = async ({ from, to, amount } : TFetchConversionArgs ): Promise<TConversion> => {
  const apiKey = process.env.API_KEY;
  const url = `https://api.currencybeacon.com/v1/convert?from=${from.toUpperCase()}&to=${to.toUpperCase()}&amount=${amount}&api_key=${apiKey}`;
  const response = await axios.get<TConversion>(url);
  return response.data;
};
