import { useState } from "react";
import styled from "styled-components";
import Botoes from "./Botoes"

export default function CardPergunta({card}){
    const[estadoCard, setEstadoCard] = useState("pergunta");

    function mostraResposta(){
        setEstadoCard("resposta");
    }

    return ( 
        <ItemPergunta>
            <p onClick={()=>mostraResposta()}>{estadoCard === "pergunta"? card.pergunta : card.resposta}</p>
            <img src="../assets/img/seta_virar.png" alt = ""/>
            {estadoCard === "resposta" &&(
                <Botoes/>
            )}
        </ItemPergunta>
    );

}

const ItemPergunta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img{
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    p{
        text-align: center;
    }
`