import styled from "styled-components";
import Botoes from "./Botoes"

export default function CardPergunta(){
    return ( 
        <ItemPergunta>
            <p> the book is on the table?</p>
            <Botoes></Botoes>
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
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`