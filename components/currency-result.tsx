import { TConversion } from "@/app/actions/fetch-conversion";

type TCurrencyResultProps = {
  data: TConversion | undefined;
  isLoading: boolean;
  error: Error | null;
};

export const CurrencyResult = ({
  data,
  isLoading,
  error,
}: TCurrencyResultProps) => {
  return isLoading ? (
    <div className="self-center text-white text-4xl">Loading...</div>
  ) : error ? (
    <div className="self-center text-white text-4xl">
      Error: {error.message}
    </div>
  ) : data ? (
    <div className="bg-white self-center max-md:text-lg file:text-sm rounded-md py-2 mt-10 px-5 text-4xl">
      {data.amount} {data.from} = {data.value.toFixed(3)} {data.to}
    </div>
  ) : null;
};
