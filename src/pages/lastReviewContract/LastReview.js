import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import sosLogo from "../../utils/images/sos.png";
import ResumeContrato from '../../utils/globalComponents/ResumeContrato';
import ResumeMaquinas from '../../utils/globalComponents/ResumeMaquinas';

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function LastReview() {
    const navigate = useNavigate();

  return (
    
        <Container onLoad={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} >
            <img src={sosLogo} alt="Logo SOS Locacoes" />
            <h1>ÚLTIMA REVISÃO</h1><br />
            <span>Confirme se os dados estão corretos</span>   <br />

            <ResumeContrato />
            <ResumeMaquinas />
            <ToastContainer />

            <ContainerButtons>
                <ButtonObservation onClick={() => window.alert("Aguarde, função em desenvolvimento...")}>🔧<br /> ADICIONAR OBSERVAÇÃO EXTRA</ButtonObservation>
                <ButtonGoToPDF onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                   navigate("/download")
                   
                }}>📖​ <br />GERAR PDF DO CONTRATO</ButtonGoToPDF>
            </ContainerButtons><br />
            <tt>PLATAFORMA DESENVOLVIDA POR: PEDRO HENRIQUE</tt>
        </Container>
  )
}
const ButtonGoToPDF = styled.button`
    background-color: white;
    width: 50%;
    max-width: 300px;
    border-radius: 10px;
    border: thin solid white;
    background-color: green;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    height: 150px;
    color: white;
    font-weight: 800;
    font-size: 1.4rem;

    display: flex;
    justify-content:center;
    align-items: center;

   

    transition: 0.2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
        cursor: pointer;
    }
`
const ButtonObservation = styled.button`
    background-color: white;
    width: 50%;
    max-width: 300px;
    border-radius: 10px;
    background-color: black;
    border: thin solid white;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    height: 150px;
    color: white;
    font-weight: 800;
    font-size: 1.4rem;

    display: flex;
    justify-content:center;
    align-items: center;

  

    transition: 0.2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
        cursor: pointer;
    }
`
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

   
    transition: 0.2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
        cursor: pointer;
    }
`;
const Container = styled.div`
    width: 100vw;
    height: 100%;

    img{
        width: 50%;
        height: 100px;
        object-fit: contain;
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


