import styled from "styled-components"
import FlashCard from "./FlashCard"
import CardPergunta from "./CardPergunta"


export default function Corpo(){
    return (
        <Deck>
            <CardPergunta></CardPergunta>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
            <FlashCard></FlashCard>
        </Deck>
    )
}

const Deck = styled.ul`

`