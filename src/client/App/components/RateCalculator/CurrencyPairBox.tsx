import {ExchangePair} from "../../helpers/parseDailyExchangeData";
import styled from "styled-components";

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 20px;
  
  padding: 1.5em;
  
  cursor: pointer;
  &:hover{
    
  }
`

type Props = {
    pairData: ExchangePair
    onSelect: () => void
}

export function CurrencyPairBox(props: Props){
    const {pairData} = props;
    return <BoxWrapper onClick={props.onSelect}>
        <div className={"flex-1"}>
            <div className="text-xl font-medium text-black">{pairData.country}</div>
            <p className="text-slate-500">{pairData.currency}</p>
        </div>
        <div className="shrink-0">
            <div>1 {pairData.code}</div>
            <div>=</div>
            <div>{pairData.rate} CZK</div>
        </div>
    </BoxWrapper>
}