import styled from "styled-components";

const VERDE = '#119811';
const VERMELHO = '#bb0000';
const AMARELO = '#ddc500';

export default function Botoes({card, acertos, atualizaAcertos, mostraResposta}){
    
    return(
        <ContainerBotoes>
            <button style={{background:VERMELHO}}>Não Lembrei</button>
            <button style={{background: AMARELO}}>Quase não lembrei</button>
            <button style={{background:VERDE}} onClick={()=>atualizaAcertos(card) && mostraResposta() }>Zap!</button>
        </ContainerBotoes>
    );
}

const ContainerBotoes = styled.div`
    display: flex; //none, se pergunta, flex se resposta;
    width: 90%;
    justify-content: space-between;
    margin: 20px;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
/*         background: blue;*/
        border-radius: 5px;
        border: 2px solid black;
        padding:5px;
        margin: 0 5px;
        cursor: pointer;
    } 
    & button:hover{
        opacity: 0.8;
    }
`
