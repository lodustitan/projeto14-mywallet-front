import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useLocalStorage from "../components/localStorage";
import Input from "../components/Input";
import Button from "../components/Button";
import ActionText from "../components/ActionText";
import png_myWallet from "../assets/image/MyWallet.png";

function Signin(){

    const navigate = useNavigate();
    const [storage, setStorage] = useLocalStorage("uid");
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function requestLogin(){
        axios.post("http://localhost:5000/sign-in", 
            {
                email,
                password: senha
            })
        .then(res => {
            const stringifycation = (res.data.uid)?.replaceAll("\"", "");
            setStorage({uid: stringifycation, name: res.data.name});
            console.log(res.data, "login")
            if(res.data.uid)
                navigate("/");
        });
    }
    return (
        <Style>
            <Content>
                <img src={png_myWallet} alt="myWallet Logo" />
                <Input placeholder="E-Mail" value={email} onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha" value={senha}  onChange={e => setSenha(e.target.value)}/>
                <Button onClick={requestLogin}>Entrar</Button>
                <ActionText onClick={() => navigate("/sign-up")}>Primeira vez? Cadastre-se!</ActionText>
            </Content>
        </Style>
    )
}

const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    width: 100%;
    height: 100vh;

    
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    height: 180px;
    width: 100%;
    img {
        height: 2rem;
        width: 180px;
    }
`;

export default Signin;