import styled from "styled-components"
import FlashCard from "./FlashCard"
import CardPergunta from "./CardPergunta"
import { useState } from "react";


export default function Corpo({decks}){
    const {id, ativo, pergunta, resposta} = decks;
    const[visualizadas, setVisualizadas] = useState([]);

    function cardVisualizado(card){
        const adicionado = [...visualizadas, card.id];
        setVisualizadas(adicionado);
        console.log(visualizadas);
        
    }

    return (
        <Deck>
            {decks.map((card)=>(visualizadas.includes(card.id) ? 
            <CardPergunta card={card}/> 
            : 
            <FlashCard card={card} cardVisualizado={cardVisualizado}/>))}
            
        </Deck>
    )
}

const Deck = styled.ul`

`