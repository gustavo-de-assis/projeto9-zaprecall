import styled from "styled-components";

const VERDE = '#119811';
const VERMELHO = '#bb0000';
const AMARELO = '#ddc500';

export default function Botoes(){
    
    return(
        <ContainerBotoes>
            <button >Não Lembrei</button>
            <button >Quase não lembrei</button>
            <button >Zap!</button>
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
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: ${VERDE};//blue;
        border-radius: 5px;
        border: 2px solid black;
        padding:5px;
        margin: 0 5px;
    }  
`
