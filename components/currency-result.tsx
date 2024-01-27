import { TExchangeRates } from "@/app/utils/fetch-exchange-rates";

interface CurrencyResultProps {
  data: TExchangeRates;
}

export const CurrencyResult = ({ data }: CurrencyResultProps) => {
  return (
    <div className="bg-white self-center max-md:text-lg file:text-sm rounded-md py-2 mt-10 px-5 text-4xl ">
      {data.amount} {""}
      {data.from} = {data.value.toPrecision(3)} {data.to}
    </div>
  );
};
