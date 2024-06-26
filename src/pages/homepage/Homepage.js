import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import sosLogo from "../../utils/images/sos.png";
import fusionLogo from "../../utils/images/fusion.png";
import multmaqLogo from "../../utils/images/multmaq.jpg";
import BlockRightClickAndKeys from '../../utils/globalComponents/blockUserClick';
import Swal from 'sweetalert2';


export default function Homepage() {
    const navigate = useNavigate();
    function messageInDevoloping(){
        Swal.fire({
            title: "Notificação do Sistema!",
            text: "Recurso em desenvolvimento, por favor aguardar futuras atualizações!",
            icon: "info"
          });
    }
  return (
    <BlockRightClickAndKeys>
        <Container>
            <h1>Fusion Contratos</h1><br />
            <span>Seja bem vindo a plataforma, selecione qual empresa deseja montar o contrato:</span>    
            <ContainerButtons>
                <ButtonEmpresa onClick={() => navigate("/sos")}><img src={sosLogo} alt="Logo SOS Locacoes" /></ButtonEmpresa>
                <ButtonEmpresa onClick={() => messageInDevoloping()}><img src={fusionLogo} alt="Logo Fusion Copiadoras" /></ButtonEmpresa>
                <ButtonEmpresa onClick={() => messageInDevoloping()}><img src={multmaqLogo} alt="Logo Multmaq Locacoes" /></ButtonEmpresa>
                <ButtonEmpresa onClick={() => messageInDevoloping()}><strong>ASSIS LOCAÇÕES</strong></ButtonEmpresa>
            </ContainerButtons>
            <tt>PLATAFORMA DESENVOLVIDA POR: PEDRO HENRIQUE 🚀</tt>
        </Container>
     </BlockRightClickAndKeys>
  )
}
const ContainerButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%; 
    max-width: 800px;

    margin-top: 50px;
    margin-bottom: 50px;

`;
const ButtonEmpresa = styled.button`
    background-color: white;
    margin-top: 6px;
    width: 280px;
    
    border-radius: 10px;
    border: thin solid white;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    height: 220px;
    color: black;

    display: flex;
    justify-content:center;
    align-items: center;

    margin-right: 6px;
    img{
        width: 165px; 
    }

    transition: 0.2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
        cursor: pointer;
    }
`;
const Container = styled.div`
    width: 100vw;
    height: 100vh;

    strong{
        font-weight: 900;
        font-size: 32px;
        letter-spacing: 1px;
        color: darkgreen;
        font-family: "Inter";
    }
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: black;

    font-family: 'Inter';
    tt{
        font-family: 'Inter';
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
    }
    
    h1{
    font-weight: 900;
        font-size: 30px;
        text-transform: uppercase;
    }
    span{
        font-weight: 300;
        font-size: 1rem;
    }
    
`;


