import {parseDailyExchangeData} from "../helpers/parseDailyExchangeData";
import {useQuery} from "react-query";

export function HomePage() {
    const {isLoading, error, data} = useQuery('dailyRateData', () => {
        fetch('/api').then((response) => response.text())
            .then((text) => parseDailyExchangeData(text));
    })

    return <div className="container mx-auto">
        <h1>CNB Currency Calculator</h1>

    </div>;
}