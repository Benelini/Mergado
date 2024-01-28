"use client";
import { Combobox } from "./combo-box";
import { Input } from "./ui/input";
import ExchangeIcon from "./svgs/exchange-icon";
import { fetchConversion } from "@/app/actions/fetch-conversion";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CurrencyResult } from "./currency-result";

export const ConvertCurrency = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("czk");
  const [to, setTo] = useState("usd");
  const { data, isLoading, error, refetch } = useQuery({
    enabled: false,
    queryKey: ["exchangeRates", { from, to, amount }],
    queryFn: () => fetchConversion({ from, to, amount }),
  });
  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <div className="flex flex-col justify-center items-end max-md:items-center">
      {" "}
      <div className="flex flex-row max-md:flex-col items-center justify-center gap-5">
        <div className="flex flex-col justify-start items-start max-md:items-center max-md:justify-center">
          <Input
            className="w-[200px]    "
            id="amount"
            placeholder="Enter currency amount"
            type="text"
            value={amount}
            pattern="[0-9]*"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <Combobox mainText="From..." value={from} setValue={setFrom} />
        <button onClick={swapCurrencies}>
          <ExchangeIcon className="size-10 fill-white hover:fill-slate-300" />
        </button>
        <Combobox mainText="To..." value={to} setValue={setTo} />
      </div>
      <Button
        className="bg-white text-black mt-5 hover:bg-slate-300"
        onClick={() => {
          amount > 0 && refetch();
        }}
      >
        Convert
      </Button>
      <CurrencyResult data={data} isLoading={isLoading} error={error} />
    </div>
  );
};
