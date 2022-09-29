import styled from "styled-components";
import Botoes from "./Botoes";

export default function Rodape(){
    return(
        <Footer>
            <Botoes/>
            <h1>Oi</h1>
        </Footer>
    )
}

const Footer = styled.div`
    
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;


`