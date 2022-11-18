import styled from "styled-components";

function ActionText({children, onClick}){
    return(
        <Style onClick={onClick}>
            {children}
        </Style>
    )
}

const Style = styled.span`
    cursor: pointer;
    font-size: 1rem;
    color: white;
`;

export default ActionText;