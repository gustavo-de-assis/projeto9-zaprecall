import styled from "styled-components"
import Pergunta from "./Pergunta"


export default function Corpo(){
    return (
        <Deck>
            <Pergunta></Pergunta>
            <Pergunta></Pergunta>
            <Pergunta></Pergunta>
            <Pergunta></Pergunta>
            <Pergunta></Pergunta>
        </Deck>
    )
}

const Deck = styled.ul`

`