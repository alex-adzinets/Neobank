import axios from "axios";
import useQuery from "@/api/useFetch";
import { ICurrencyResponse } from "@/common/interfaces/currency";

const baseURL = "https://api.exchangeratesapi.io/v1";
const accessKey = "9a4cc928c16f005b568b70a288de57ed";
const currencyUrl = `${baseURL}/latest?access_key=${accessKey}`;
const timeDelay = 15 * 60 * 1000;

const getCurrencyRates = async () => {
    // const response = await axios.get<ICurrencyResponse>(currencyUrl);
    // return response.data;
    return {
        "success": true,
        "timestamp": 1519296206,
        "base": "EUR",
        "date": "2021-03-17",
        "rates": {
            "AUD": 1.566015,
            "CAD": 1.560132,
            "CHF": 1.154727,
            "CNY": 7.827874,
            "GBP": 0.882047,
            "JPY": 132.360679,
            "USD": 1.23396,
        }
    }
};

export const UseQueryResult = ()  => {
    return useQuery({
        queryFn: getCurrencyRates,
        staleTime: timeDelay, 
    });
};
