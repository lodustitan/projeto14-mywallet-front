import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import useLocalStorage from "./localStorage";

function Data({uid, date, value, type, children}){

    const [Uid] = useState(uid);
    const [storage] = useLocalStorage("uid");

    function deleteMyData()
    {
        axios.delete("http://localhost:5000/wallet", {headers: {uid: Uid, owneruid: storage}})
        .then(res => console.log(res));
    }

    return (
        <Style type={type}>
            <div className="data">{date}</div>
            <div className="boxValue">
                <div className="texto">{children}</div>
                <div className="valorBox">
                    <div className="valor">{value.toFixed(2)}</div>
                    <div onClick={deleteMyData}>x</div>
                </div>
            </div>
        </Style>
    )
}

const Style = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2rem;
    .boxValue {
        width: 100%;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .data {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        color: #C6C6C6;
    }
    .valor {
        color: ${ ({type}) => {
            if(type === "saida") return "#C70000;";
            else return "#03AC00;";
        }}
    }
    .valorBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80px;
    }
`;

export default Data;