import React, {useState} from "react";
import styled from "styled-components";
import {useQuery} from "react-query";
import {Loading} from "../components/common/Loading";
import {Error} from "../components/common/Error";
import {ConvertForm} from "../components/ConvertForm/ConvertForm";
import {SideBar} from "../components/SideBar/SideBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {loadExchangeData} from "../api/pairsExchangeData";

const SideBarTemplate = styled.div`
  /* https://web.dev/building-a-sidenav-component/ */
  display: grid;
  grid-template-rows: [stack] 1fr;
  grid-template-columns: min-content [stack] 2fr;
  min-height: 100vh;

  @media (max-width: 540px) {
    gap: 0;
    & > * {
      grid-area: stack;
    }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.primary1};
`

const AppHeader = styled.header`
  display: flex;
  background-color: ${props => props.theme.primary3};
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  align-items: center;
  
  font-size: 20px;
`

const OpenMenu = styled.a`
  visibility: hidden;
  margin: 0 10px;
  @media (max-width: 540px) {
    visibility: visible;
  }
`

export function HomePage() {
    const {isLoading, isError, data} = useQuery('dailyRateData', loadExchangeData);

    const [selectedCurrency,  setActiveCurrency] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    if(isLoading){
        return <Loading/>
    }

    if(isError){
        return <Error/>
    }

    const activePair = data.pairs.find((item) => item.code === selectedCurrency);

    return (
        <SideBarTemplate>
            <SideBar
                data={data}
                selectedCurrency={selectedCurrency}
                onSelectCurrency={(code) => {
                    setActiveCurrency(code);
                    setIsSidebarOpen(false);
                }}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <ContentWrapper>
                <AppHeader>
                    <OpenMenu href={"#"} onClick={() => setIsSidebarOpen(true)}>
                        <FontAwesomeIcon icon={faBars} />
                    </OpenMenu>
                    <h1>Exchange rate Calculator</h1>
                </AppHeader>
                <div>
                    <ConvertForm
                        activePair={activePair}
                        data={data}
                    />
                </div>
            </ContentWrapper>
        </SideBarTemplate>
    )
}
