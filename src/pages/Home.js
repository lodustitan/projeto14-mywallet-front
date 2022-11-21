import styled from "styled-components";
import axios from "axios";
import useLocalStorage from "../components/localStorage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../components/Data";
import Button from "../components/Button";

function Home(){

    const navigate = useNavigate();
    const [storage] = useLocalStorage("uid");
    const [dados, setDados] = useState();

    useEffect(()=>{
        if(!storage)
        {
            navigate("/sign-in");
        }
        else
        {
            axios.post("http://localhost:5000/mywallet", {}, {headers: {uid: storage}})
            .then((res) => {
                console.log(res)
                const convertedData = res.data.map((data) => {
                    return {uid:data.uid, date: data.date, value: data.value, text: data.description, type: data.type};
                }) 
                setDados(convertedData);
                console.log(convertedData)
            })
        }

    }, [])

    return(
        <Style>
            <Header>
                <span>Olá, {storage && storage.name}</span>
            </Header>
            <Registers>
                <DataList>
                    {dados? 
                        dados.map((each, i) => {
                            return <Data key={i} uid={each.uid} date={each.date} value={each.value} type={each.type}>{each.text}</Data>
                        }): "Não há nada aqui"}
                </DataList>
                <Balance>
                    <span className="saldo">Saldo</span>
                    <span>
                        {dados && dados.reduce(
                            (previousValue, currentValue) => { 
                                if(currentValue.type === "entrada")
                                    return previousValue + currentValue.value
                                else
                                    return previousValue - currentValue.value
                            }, 0).toFixed(2)
                        }
                    </span>
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
    margin-bottom: 1rem;
    color: black;
`;
const DataList = styled.div`
    height: 100%;
    color: black;
`;
const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    span {
        color: black;
    }
    .saldo {
        font-weight: 700;
        font-size: 1.4rem;
    }
`;
const Header = styled.div`
    height: 5%;
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    span {
        color: white;
        font-size: 2rem;
        font-weight: 700;
    }
`;
const Panel = styled.div`
    height: 8%;
    width: 100%;
    display: flex;
`;

export default Home;