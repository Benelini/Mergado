import { TConversion } from "@/app/utils/fetch-conversion";

interface CurrencyResultProps {
  data: TConversion;
}

export const CurrencyResult = ({ data }: CurrencyResultProps) => {
  return (
    <div className="bg-white self-center max-md:text-lg file:text-sm rounded-md py-2 mt-10 px-5 text-4xl ">
      {data.amount} {""}
      {data.from} = {data.value.toFixed(3)} {data.to}
    </div>
  );
};
