import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useLocalStorage from "../components/localStorage";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";

function IOPage({types, onClick}){
    const navigate = useNavigate();
    const [storage] = useLocalStorage("uid");
    const [type] = useState(types);
    
    const location = useLocation(); 
    console.log("state", location.state);
    const [value, setValue] = useState(location.state.value);
    const [desc, setDesc] = useState(location.state.text);
    const [pageFunc] = useState(location.state.page);
    const [uid] = useState(location.state.uid)
     
    function getType(){
        if (type === 'entrada') return 'entrada';
        else return 'saida';
    }
    function requestNewIO(){
        if(pageFunc === "create"){
            axios.post("http://localhost:5000/wallet", {value, description: desc, type}, {headers: {ownerUid: storage.uid}})
            .then(res => {navigate("/")})
        }
        else{
            axios.put("http://localhost:5000/edit", {value, description: desc, uid }, {headers: {ownerUid: storage.uid}})
            .then(res => {navigate("/")})
        }
    }

    return (
        <Style>
            <Header>
                <span>{(pageFunc === "create")? "Nova": "Editar"} {getType()}</span>
            </Header>
            <Form>
                <Input type="number" placeholder="Valor" value={value} onChange={(e)=> setValue(e.target.value)}/>
                <Input type="text" placeholder="Descrição" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
                <Button onClick={requestNewIO}>Salvar {getType()}</Button>
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