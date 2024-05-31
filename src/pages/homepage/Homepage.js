import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import sosLogo from "../../utils/images/sos.png";
import fusionLogo from "../../utils/images/fusion.png";


export default function Homepage() {
    const navigate = useNavigate();
  return (
    <Container>
        <h1>Fusion Contratos</h1><br />
        <span>Seja bem vindo a plataforma, selecione qual empresa deseja montar o contrato:</span>    
        <ContainerButtons>
            <ButtonEmpresa onClick={() => navigate("/sos")}><img src={sosLogo} alt="Logo SOS Locacoes" /></ButtonEmpresa>
            <ButtonEmpresa onClick={() => navigate("/fusion")}><img src={fusionLogo} alt="Logo Fusion Copiadoras" /></ButtonEmpresa>
        </ContainerButtons>
        <tt>PLATAFORMA DESENVOLVIDA POR: PEDRO HENRIQUE</tt>
    </Container>
  )
}
const ContainerButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;   padding: 20px;

`;
const ButtonEmpresa = styled.button`
    background-color: white;
    margin-top: 40px;
    width: 40%;
    max-width: 300px;
    border-radius: 10px;
    border: thin solid white;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    height: 50%;
    min-height: 300px;
    color: black;

    display: flex;
    justify-content:center;
    align-items: center;

    img{
        width: 80%; margin-left: 10px;
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
        position: fixed;
        bottom: 10px;
    }
    
    h1{
    font-weight: 900;
        font-size: 3rem;
        text-transform: uppercase;
    }
    span{
        font-weight: 300;
        font-size: 1rem;
    }
    
`;


