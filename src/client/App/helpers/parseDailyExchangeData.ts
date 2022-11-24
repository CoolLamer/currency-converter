/**
    Api Endpoint: https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt
    Api Documentation: https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/
*/

export type ExchangePair = {
    country: string
    currency: string
    amount: number
    code: string
    rate: number
}

export type DailyExchangeData = {
    date: Date
    sequence: number
    pairs: ExchangePair[]
}

export const parseDailyExchangeData: (data: string) => DailyExchangeData = (data) => {
    const rows = data.split("\n");
    const firstRow = rows[0].split('#');
    const date = new Date(Date.parse(firstRow[0]));
    const sequence =  parseInt(firstRow[1]);

    let result: DailyExchangeData = {
        date,
        sequence,
        pairs: []
    }

    result.pairs = rows.slice(2).map((row) => {
        const [country, currency, amount, code, rate] = row.split('|');
        return {
            country,
            currency,
            amount: parseInt(amount),
            code,
            rate: parseFloat(rate)
        }
    })
    return result;
}