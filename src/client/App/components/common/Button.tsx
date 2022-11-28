import styled from "styled-components";

const Button = styled.button`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  
  padding: 0.5em 1em;
  border: 1px solid ${props => props.theme.primary1};
  background-color: ${props => props.theme.primary4};
  
  &:hover{
    background-color: ${props => props.theme.primary3};
  }
`

type Props = {
    content: string|JSX.Element
    onClick: () => void
}

export default function(props: Props){
    const {content} = props;
    return <Button {...props} onClick={props.onClick}>
        {content}
    </Button>
}