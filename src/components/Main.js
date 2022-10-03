import styled from "styled-components";
import Corpo from "./Corpo";
import Rodape from "./Rodape";
import Topo from "./Topo";
import decks from "../assets/decks"
import { useState } from "react";

export default function Main(){
    const [acertos, setAcertos] = useState(0);
    const [ativo, setAtivo] = useState(false)

    function atualizaAcertos(card){
            setAcertos(acertos +1);
            setAtivo(true);
            card.ativo = ativo;
    }


    return(
        <Container>
            <Topo/>
            <Corpo decks = {decks} acertos={acertos} atualizaAcertos={atualizaAcertos}/>
            <Rodape acertos={acertos}/>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #FB6B6B;
 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;

    position: relative;
`