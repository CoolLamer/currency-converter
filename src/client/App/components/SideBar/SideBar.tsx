import {useState} from "react";
import styled, {css} from "styled-components";
import {CurrencyPairBox} from "../RateCalculator/CurrencyPairBox";
import {DailyExchangeData, ExchangePair} from "../../helpers/parseDailyExchangeData";

const SideBarWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: [nav] 2fr [escape] 1fr;
  
  @media (max-width: 540px) {
    ${({isOpen}) => isOpen ? css`display: grid;` : css`display: none;`}
  }
  
  nav{
    min-width: 300px;
    background-color: ${props => props.theme.secondary4};
  }
`

const PairsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  h3{
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    align-items: center;

    font-size: 20px;
    text-align: center;
  }
`

const SearchBar = styled.input`
  padding: 0.5em 0.5em;
  
  border: 2px solid ${props => props.theme.secondary0}
`

type Props = {
    data: DailyExchangeData
    selectedCurrency: ExchangePair
    onSelectCurrency: (code) => void
    isOpen: boolean
    onClose: () => void
};

export const SideBar = (props: Props) => {
    const {data, selectedCurrency, isOpen, onSelectCurrency, onClose} = props;
    const [filterText, setFilterText] = useState('');

    const pairs = data.pairs.filter(({country, code, currency}) => {
        if(filterText.length === 0){
            return true;
        }
        const loweredFilter = filterText.toLowerCase();
        return country.toLowerCase().startsWith(loweredFilter)
            || code.toLowerCase().startsWith(loweredFilter)
            || currency.toLowerCase().startsWith(loweredFilter);
    })

    return (
        <SideBarWrapper isOpen={isOpen}>
            <nav>
                <PairsWrapper>
                    <h3>Avaliable currency pairs</h3>
                    <SearchBar
                        type="text"
                        placeholder={"Search by Country, currency or code"}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                    {pairs.length === 0 ? (
                        <div>Nothing Found</div>
                    ) : pairs.map((pairInfo) => <CurrencyPairBox
                        pairData={pairInfo}
                        isActive={selectedCurrency == null ? false : pairInfo.code == selectedCurrency.code}
                        onSelect={() => onSelectCurrency(pairInfo.code)}
                    />)}
                    {}
                </PairsWrapper>
            </nav>
            <a href={"#"} onClick={onClose}></a>
        </SideBarWrapper>
    );
}