import styled from "styled-components";

function Data({date, value, children}){
    return (
        <Style value={value}>
            <div className="data">{date}</div>
            <div className="texto">{children}</div>
            <div className="valor">{value.toFixed(2)}</div>
        </Style>
    )
}

const Style = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    .data {
        color: #C6C6C6;
    }
    .valor {
        color: ${ ({value}) => {
            if(value < 0) return "#C70000;";
            else return "#03AC00;";
        }}
    }
`;

export default Data;