import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const LoadingWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;

    font-size: 30px;
    background-color: ${props => props.theme.primary1};  
  
    svg {
    animation: spin infinite 2s linear;
    }
    
    @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }
  
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
    }
`

export function Loading(){
    return <LoadingWrapper>
        <div>
            <FontAwesomeIcon icon={faSpinner}/>
            Loading data from API
        </div>
    </LoadingWrapper>
}