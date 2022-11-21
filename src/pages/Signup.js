import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import ActionText from "../components/ActionText";
import png_myWallet from "../assets/image/MyWallet.png";

function Signup(){

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [senha2, setSenha2] = useState();

    function requestRegister(){
        axios.post("http://localhost:5000/sign-up", 
            {
                name: nome,
                email,
                password: senha,
                confirm_password: senha2 
            })
        .then(res => console.log(res));
    }
    return (
        <Style>
            <Content>
                <img src={png_myWallet} alt="myWallet Logo" />
                <Input placeholder="Nome" value={nome} onChange={(e)=>setNome(e.target.value)} />
                <Input placeholder="E-Mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <Input placeholder="Senha" value={senha} onChange={(e)=>setSenha(e.target.value)} />
                <Input placeholder="Confirme a senha" value={senha2} onChange={(e)=> setSenha2(e.target.value)} />
                <Button onClick={requestRegister}>Cadastrar</Button>
                <ActionText>Já tem uma conta? Entre agora!</ActionText>
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

export default Signup;