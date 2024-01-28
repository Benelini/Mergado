import { TFetchConversionArgs } from "@/actions/fetch-conversion";
import { useQuery } from "@tanstack/react-query";
import { fetchConversion } from "@/actions/fetch-conversion";

export const useCurrencyConversion = ({
  from,
  to,
  amount,
}: TFetchConversionArgs) => {
  const queryInfo = useQuery({
    enabled: false,
    queryKey: ["exchangeRates", { from, to, amount }],
    queryFn: () => fetchConversion({ from, to, amount }),
  });

  return queryInfo;
};
