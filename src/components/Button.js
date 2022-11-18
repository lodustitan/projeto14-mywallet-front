import styled from "styled-components";

function Button({value, children, onClick}){
    return(
        <Style onClick={onClick} value={value}>
            {children}
        </Style>
    )
}

const Style = styled.button`
    width: 90%;
    height: 2rem;
    background-color: #A328D6;
    color: white;
    border: none;
    outline: none;
`;

export default Button;