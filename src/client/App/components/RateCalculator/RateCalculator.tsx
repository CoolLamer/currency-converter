import {DailyExchangeData, parseDailyExchangeData} from "../../helpers/parseDailyExchangeData";
import {useQuery} from "react-query";
import {Loading} from "../common/Loading";
import {Error} from "../common/Error";
import {CurrencyPairBox} from "./CurrencyPairBox";
import {useState} from "react";
import {ConvertForm} from "../ConvertForm/ConvertForm";

type Props = {

}

export function RateCalculator (props: Props) {
    const {isLoading, error, data} = useQuery<unknown,unknown,DailyExchangeData>('dailyRateData', () =>  {
        return fetch('/api').then((response) => response.text())
            .then((text) => parseDailyExchangeData(text));
    });

    const [selectedCurrency,  setActiveCurrency] = useState(null);
    if(isLoading){
        return <Loading/>
    }

    if(error){
        return <Error eror={error}/>
    }

    return (
        <>
            <ConvertForm
                activePair={data.pairs.find((item) => item.code === selectedCurrency)}
                data={data}
            />
            <div className={"columns-3 gap-5 gap-x-5"}>
                {data.pairs.map((pairInfo) => <CurrencyPairBox pairData={pairInfo} onSelect={() => setActiveCurrency(pairInfo.code)} />)}
            </div>
        </>
    )
}