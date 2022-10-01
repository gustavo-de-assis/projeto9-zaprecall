import styled from "styled-components"
import FlashCard from "./FlashCard"
import CardPergunta from "./CardPergunta"


export default function Corpo({decks}){
    const {id, pergunta, resposta} = decks;
    return (
        <Deck>
            {decks.map((card)=><CardPergunta card={card}/>)}
            {/*
            <CardPergunta decks={decks}/>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>*/}
        </Deck>
    )
}

const Deck = styled.ul`

`