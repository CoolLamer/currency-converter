import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

const ErrorWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  font-size: 30px;
  background-color: ${props => props.theme.primary1};

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
`

export function Error(){
    return <ErrorWrapper>
        <div>
            <FontAwesomeIcon icon={faTriangleExclamation}/>
            Error While loading exchange rate Data
        </div>
    </ErrorWrapper>
}