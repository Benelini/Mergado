"use client";
import { Combobox } from "./combo-box";
import { Input } from "./ui/input";
import ExchangeIcon from "./svgs/exchange-icon";
import { fetchExchangeRates } from "@/app/utils/fetch-exchange-rates";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "@/hooks/use-debounce";

export const ConvertCurrency = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("czk");
  const [to, setTo] = useState("usd");
  const { data, isLoading, error, refetch } = useQuery({
    enabled: false,
    queryKey: ["exchangeRates", { from, to, amount }],
    queryFn: () => fetchExchangeRates({ from, to, amount }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {" "}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col justify-start items-start mx-4">
          <Input
            id="amount"
            placeholder="Enter currency amount"
            type="text"
            value={amount}
            pattern="[0-9]*"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <Combobox mainText="From..." value={from} setValue={setFrom} />
        <button
          className="px-4"
          onClick={() => {
            refetch();
          }}
        >
          <ExchangeIcon className="w-10 h-10 fill-white hover:fill-slate-400" />
        </button>
        <Combobox mainText="To..." value={to} setValue={setTo} />
      </div>
      {data ? (
        <div className="bg-white file:text-sm rounded-md py-2 mt-10 px-5 text-4xl ">
          {data.amount} {""}
          {data.from} = {data.value.toPrecision(3)} {data.to}
        </div>
      ) : null}
    </div>
  );
};
