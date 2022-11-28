import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {divide, multiply, round} from "mathjs";
import Button from "../common/Button";
import {DailyExchangeData, ExchangePair} from "../../api/pairsExchangeData";

const CurrencyInputWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  box-shadow: rgb(0 17 51 / 5%) 0 3px 15px;
  padding: 0 10px;
  background: white;
  
  input{
    flex:1;
    text-align: right;
    padding: 12px;
    
    transition: 200ms;

    // Hide Arrows/Spinners
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus{
      outline: none;
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 2em;
`

const ConvertFormWrapper = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${props => props.theme.primary2};
  padding: 2em;;
  
  max-width: 800px;
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
        const foreignValue = divide(localCurrencyValue, activePair.rate);
        setForeignCurrencyValue(
            round(foreignValue, 3)
        )
    };

    const convertToLocalValue = () => {
        const localValue = multiply(foreignCurrencyValue, activePair.rate);
        setLocalCurrencyValue(
            round(localValue, 3)
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

    return <ConvertFormWrapper>
        <div>Calculate exchange rate from Czechia crown (CZK) to {activePair.country} {activePair.currency} ({activePair.code})</div>
        <CurrencyInputWrapper>
            <input value={localCurrencyValue} type={"number"} onChange={(e) => setLocalCurrencyValue(parseFloat(e.target.value))}/>
            <span>CZK</span>
        </CurrencyInputWrapper>
        <CurrencyInputWrapper>
            <input value={foreignCurrencyValue} type={"number"} onChange={(e) => setForeignCurrencyValue(parseFloat(e.target.value))}/>
            <span>{activePair.code}</span>
        </CurrencyInputWrapper>
        <ButtonsWrapper>
            <Button  onClick={() => convertToForeignValue()} content={"Convert"}/>
            <Button onClick={() => convertToLocalValue()} content={"Convert to local currency"}/>
        </ButtonsWrapper>
    </ConvertFormWrapper>
}