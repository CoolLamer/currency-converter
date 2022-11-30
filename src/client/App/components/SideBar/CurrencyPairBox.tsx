import styled, {css} from "styled-components";
import {ExchangePair} from "../../api/pairsExchangeData";

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid gray;

  cursor: pointer;
  background-color: ${props => props.theme.secondary0};
  border: 1px solid ${props => props.theme.secondary4};
  
  padding: 10px 15px;
  gap: 5px;
  
  transition: 200ms;

  &:hover {
    background-color: ${props => props.theme.secondary2};
  }
  
  ${(props) => {
      if(props.active){
          return css`
            background-color: ${props => props.theme.secondary1};
          `
      }
  }}
`

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
`

type Props = {
    pairData: ExchangePair
    isActive: boolean
    onSelect: () => void
}

export function CurrencyPairBox(props: Props){
    const {pairData, isActive} = props;
    return <BoxWrapper onClick={props.onSelect} active={isActive}>
        <LabelRow>
            <div>{pairData.country}</div>
            <div>{pairData.currency}</div>

        </LabelRow>
        <LabelRow>
            <div>{pairData.amount} {pairData.code}</div>
            <div>{pairData.rate} CZK</div>
        </LabelRow>
    </BoxWrapper>
}