import styled from "styled-components";


export default function Botoes(){
    return(
        <ContainerBotoes>
            <button>Não Lembrei</button>
            <button>Quase não lembrei</button>
            <button>Zap!</button>
        </ContainerBotoes>
    );
}

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: blue;
        border-radius: 5px;
        border: 1px solid blue;
        padding:5px;
    }  
`
