import styled from "styled-components";

function Input({value, placeholder, type, onChange}){
    return(
        <Style type={type} placeholder={placeholder} value={value} onChange={onChange} />
    )
}

const Style = styled.input`
    width: 90%;
    height: 2rem;
    border-radius: 5px;
    border: none;
    outline: none;
`;

export default Input;