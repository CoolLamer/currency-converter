import styled from "styled-components";
import {DailyExchangeData, ExchangePair} from "../../helpers/parseDailyExchangeData";
import React, {useEffect, useState} from "react";
import { divide, multiply } from "mathjs";

const CurrencyInput = styled.input`
  text-align: right;
  border: 1px solid black;
  margin-right: 2px;
`

const Button = styled.button`
    
`

type Props = {
    activePair: ExchangePair
    data: DailyExchangeData
}

export function ConvertForm(props: Props){
    const {activePair} = props;

    const [ localCurrencyValue, setLocalCurrencyValue ] = useState(1);
    const [ foreignCurrencyValue, setForeignCurrencyValue ] = useState(5);

    const convertToForeignValue = () => {
        setForeignCurrencyValue(
            divide(localCurrencyValue, activePair.rate)
        )
    };

    const convertToLocalValue = () => {
        setLocalCurrencyValue(
            multiply(foreignCurrencyValue, activePair.rate)
        )
    };

    useEffect(() => {
        if(!activePair){
            return;
        }
        convertToForeignValue()
    }, [activePair])

    if(activePair == null){
        return <div>Select Currency to convert FROM CZK</div>
    }

    return <div className={"p-4"}>
        <div>
            <CurrencyInput value={localCurrencyValue} onChange={(e) => setLocalCurrencyValue(e.target.value)}/> CZK
            <CurrencyInput value={foreignCurrencyValue} onChange={(e) => setForeignCurrencyValue(e.target.value)}/>{activePair.code}
        </div>
        <div>
            <Button onClick={() => convertToForeignValue()}>Convert</Button>
            <Button onClick={() => convertToLocalValue()}>Convert Back</Button>
        </div>
    </div>
}