"use client";
import { Combobox } from "./combo-box";
import { Input } from "./ui/input";
import ExchangeIcon from "./svgs/exchange-icon";
import { fetchExchangeRates } from "@/app/utils/fetch-exchange-rates";
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
    queryFn: () => fetchExchangeRates({ from, to, amount }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
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
        <Combobox mainText="To..." value={to} setValue={setTo} />
      </div>
      <Button
        className="bg-white text-black mt-5"
        onClick={() => {
          refetch();
        }}
      >
        Convert
      </Button>
      {data && <CurrencyResult data={data} />}
    </div>
  );
};
