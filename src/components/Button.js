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
    padding: 1rem 0;
    background-color: #A328D6;
    font-weight: 600;
    font-size: 1.2rem;
    color: white;
    border-radius: 5px;
    border: none;
    outline: none;
`;

export default Button;