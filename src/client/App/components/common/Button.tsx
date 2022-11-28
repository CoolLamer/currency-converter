import styled from "styled-components";

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.primary1};
  background-color: ${props => props.theme.primary0};
  &:hover{
    background-color: ${props => props.theme.primary2};
  }
`

type Props = {
    content: string|JSX.Element
    onClick: () => void
}

export default function(props: Props){
    const {content} = props;
    return <Button onClick={props.onClick}>
        {content}
    </Button>
}