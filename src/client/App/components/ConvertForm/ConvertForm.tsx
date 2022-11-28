import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {divide, multiply, round} from "mathjs";
import Button from "../common/Button";
import {DailyExchangeData, ExchangePair} from "../../api/pairsExchangeData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";

const CurrencyInputWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  
  border: 1px solid ${props => props.theme.primary4};
  
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
  @media (max-width: 540px) {
    width: 100%;
  }
`

const InputRow = styled.div`
  display: flex;
  gap: 1em;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: end;
  }
`

const ConvertFormWrapper = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  gap: 1em;

  background-color: ${props => props.theme.primary2};
  padding: 2em;
  
  max-width: 800px;
`

const ConvertButton = styled(Button)`
  min-width: 150px;
  @media (max-width: 540px) {
    width: 100%; 
  }
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


    return <ConvertFormWrapper>
        {activePair == null ? (
            <div>Select Currency to convert FROM CZK</div>
        ) : (
            <>
                <div>Calculate exchange rate from Czechia crown (CZK) to {activePair.country} {activePair.currency} ({activePair.code})</div>
                <InputRow>
                    <CurrencyInputWrapper>
                        <input value={localCurrencyValue} type={"number"} onChange={(e) => setLocalCurrencyValue(parseFloat(e.target.value))}/>
                        <span>CZK</span>
                    </CurrencyInputWrapper>
                    <ConvertButton
                        onClick={() => convertToForeignValue()}
                        content={
                            <>
                                <FontAwesomeIcon icon={faArrowDown}/>
                                Convert
                            </>
                        }
                    />
                </InputRow>
                <InputRow>
                    <CurrencyInputWrapper>
                        <input value={foreignCurrencyValue} type={"number"} onChange={(e) => setForeignCurrencyValue(parseFloat(e.target.value))}/>
                        <span>{activePair.code}</span>
                    </CurrencyInputWrapper>
                    <ConvertButton
                        onClick={() => convertToLocalValue()}
                        content={
                            <>
                                <FontAwesomeIcon icon={faArrowUp}/>
                                Convert
                            </>
                        }
                    />
                </InputRow>
            </>
        )}

    </ConvertFormWrapper>
}