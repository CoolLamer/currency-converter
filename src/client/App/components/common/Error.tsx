import styled from "styled-components";

const ToastWrapper = styled.div`
`

type Props = {
    error: any
}

export function Error(props: Props){
    return <ToastWrapper>
        Chyba při načítání dat
    </ToastWrapper>
}