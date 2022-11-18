import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../components/Data";
import Button from "../components/Button";

function Home(){

    const navigate = useNavigate();
    const [dados] = useState([
        {date: "30/11", value: 5217.32, text: "funfando plenamente"},
        {date: "30/11", value: -322.32, text: "funfando plenamente"},
        {date: "30/11", value: -2300.02, text: "funfando plenamente"},
    ]); 

    return(
        <Style>
            <Header>
                <span>Olá, Fulano</span>
            </Header>
            <Registers>
                <DataList>
                    {dados? 
                        dados.map(each => {
                            return <Data date={each.date} value={each.value}>{each.text}</Data>
                        }): "Não há nada aqui"}
                </DataList>
                <Balance>
                    <span>Saldo</span>
                    <span>{dados && dados.reduce((previousValue, currentValue) => { return previousValue + currentValue.value}, 0).toFixed(2)}</span>
                </Balance>
            </Registers>
            <Panel>
                <Button onClick={() => navigate("entrada")}>Nova Entrada</Button>
                <Button onClick={() => navigate("saida")}>Nova Saida</Button>
            </Panel>
        </Style>
    )
}

const Style = styled.div`
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
`;
const Registers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    background-color: white;
    border-radius: .4rem;
    overflow-y: auto;
    color: black;
`;
const DataList = styled.div`
    height: 90%;
    color: black;
`;
const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10%;
    span{
        color: black;
        font-weight: 400;
    }
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
const Panel = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
`;

export default Home;