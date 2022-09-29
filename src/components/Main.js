import styled from "styled-components";
import Corpo from "./Corpo";
import Rodape from "./Rodape";
import Topo from "./Topo";


export default function Main(){
    return(
        <Container>
            <Topo/>
            <Corpo/>
            <Rodape/>
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