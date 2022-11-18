import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

function IOPage({types, onClick}){
    const [type] = useState(types);
    const [value, setValue] = useState();
    const [desc, setDesc] = useState();
     
    function getType(){
        if (type === 'entrada') return 'entrada';
        else return 'saida';
    }

    return (
        <Style>
            
            <Header>
                <span>Nova {getType()}</span>
            </Header>
            <Form>
                <Input type="number" placeholder="Valor" value={value} onChange={(e)=> setValue(e.target.value)}/>
                <Input type="text" placeholder="Descrição" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
                <Button onClick={onClick}>Salvar {getType()}</Button>
            </Form>
        </Style>
    )
}

const Style = styled.div`
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
`;
const Header = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    span {
        color: white;
        font-size: 2rem;
        font-weight: 700;
    }
`;
const Form = styled.div`
    height: 8rem;
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
export default IOPage;