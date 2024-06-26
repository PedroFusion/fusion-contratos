import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import sosLogo from "../../utils/images/topper-sos-contrato.png";
import generatePDF, { Options } from "react-to-pdf";

import { FaDownload, FaRegHandPointLeft } from "react-icons/fa6";



import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import BlockRightClickAndKeys from '../../utils/globalComponents/blockUserClick';

export default function Download() {
    const navigate = useNavigate();
    const [locataria, setLocataria] = useState((JSON.parse(localStorage.getItem("@dados-contrato"))));
    const [vencimento, setVencimento] = useState((JSON.parse(localStorage.getItem("@vencimento"))));
    const [maquinas, setMaquinas] = useState((JSON.parse(localStorage.getItem("@maquinas"))));




    // useEffect(() => {
    //     if (locataria === null) {
    //         setLocataria(JSON.parse(localStorage.getItem("@dados-contrato")));
    //     }
    //   }, [locataria]);

    const options = {
        filename: `CONTRATO - ${locataria.nome}-${vencimento.prazoContrato} meses.pdf`,
        page: {
          margin: 2
        },
        canvas: {
            // default is 'image/jpeg' for better size performance
            mimeType: "image/jpeg",
            qualityRatio: 1,
          },
          overrides: {
            // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
            format: 'a4',
            pdf: {
              compress: true,
            },
            // see https://html2canvas.hertzen.com/configuration for more options
            canvas: {
              useCORS: true,
            },
          },
      };


    const getTargetElement = () => document.getElementById("container");

    
      
    function downloadAndClose(){
        generatePDF(getTargetElement, options);

        toast.info("Aguarde, estou gerando o pdf, o download será realizado automaticamente... ​✅​", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        
      }
  return (
    <>  
    < BlockRightClickAndKeys>
        <ButtonsNavigation>

            <button onClick={() => navigate("/last-review")}><FaRegHandPointLeft /> VOLTAR</button>
            <button onClick={() => {
                downloadAndClose()
                toast.info("Aguarde, estou gerando o pdf, o download será realizado automaticamente... ​✅​", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }}><FaDownload /> BAIXAR</button>
            <a href="http://wa.me/+5518997712016" target="_blank" >PLATAFORMA DESENVOLVIDA POR: PEDRO HENRIQUE 🚀</a>
        </ButtonsNavigation>
        <BodyStyled>
            
                <ToastContainer />
        <div id="container">
            
            <Container onLoad={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} >
                <img src={sosLogo} alt="Logo SOS Locacoes" />
                <br />
                <h6 className='instrumento negrito'>INSTRUMENTO PARTICULAR DE <br />
                LOCAÇÃO DE EQUIPAMENTO</h6><br />


                <div className='alinhamento-esquerdo'>
                    <h6>Pelo presente instrumento entre as partes, de um lado</h6>
                    <br />

                    <h6 className='negrito'> “LOCADORA” </h6>
                    <div className='quadro alinhamento-esquerdo negrito'>
                        <br />
                            <h6> SOS LOCAÇÕES IMPRESSORAS E COPIADORAS LTDA - ME</h6>
                            <h6> Rua Siqueira Campos, 1590, Vila Roberto, Presidente Prudente /SP -</h6>
                            <h6> CEP: 19.013-030</h6>
                            <h6> Fone: (18) 3223-9945</h6>
                            <h6> CNPJ: 04.635.737/0001-31 - Inscrição estadual nº 562.242.971-110</h6>
                        <br />                     
                    </div>
                    <br />

                    <h6>de outro lado</h6>
                    <br />

                    <h6 className='negrito'> "LOCATÁRIA" </h6>
                    <div className='quadro alinhamento-esquerdo'>
                        <br />
                        <h6>Nome:<strong> {locataria.nome}</strong></h6>
                        <h6>End.: <strong>{locataria.endereco}</strong></h6>
                        <h6>CEP: <strong>{locataria.cep}</strong></h6>
                        <h6>Cidade: <strong>{locataria.cidade}</strong></h6>
                        <h6>Fone: <strong>{locataria.telefone}</strong></h6>
                        <h6>E-MAIL: <strong>{locataria.email}</strong></h6>
                        <h6> CONTATO: <strong>{locataria.contato}</strong></h6>
                        <h6> CNPJ / CPF: <strong>{locataria.cnpj}</strong></h6>
                        <h6>Inscrição Estadual / RG: <strong>{locataria.inscricao ? locataria.inscricao : "-"}</strong></h6> <br />
                        <h6>LOCAL DE INSTALAÇÃO DO EQUIPAMENTO:</h6>
                        <h6><strong>( X ) O mesmo (acima)</strong>     - ( ) Outro endereço (abaixo)</h6>
                        <br />                     
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className='alinhamento-esquerdo'>
                    <h6><strong>CONDIÇÕES GERAIS:</strong></h6>
                    <br />
                            <h6>Equipamento(s): </h6><br />
                            <h6> <strong>SAMSUNG 4020ND</strong> - Série: <strong>ZDEJB07K211CZKA</strong> - Num.Inicial total: <strong>463.667</strong></h6>
                            <br /><br /><h6>Data de instalação: <strong>{new Date().toLocaleDateString("pt-BR")}</strong></h6><br />
                            <h6>Nome do(s) contato(s): <strong>{locataria.contato}</strong></h6><br />
                            <h6>Data da assinatura do contrato: <strong>{new Date().toLocaleDateString("pt-BR")}</strong></h6><br />
                            <h6>Nome do Signatário: <strong>{locataria.contato}</strong></h6><br />
                            <h6>Prazo Contratual: <strong>{vencimento.prazoContrato} meses / Valor do aluguel: R$ {vencimento.valorContrato} por mês</strong></h6><br />
                            <h6>Franquia mínima de <strong>{vencimento.franquia} impressões A4 por mês – Excedente de R$ {vencimento.excedente.replace(".",",")}</strong></h6><br />
                    </div>

                    


                </div>

            </Container>
            </div>


        </BodyStyled>
        </BlockRightClickAndKeys>
    </>
  )
}
const BodyStyled = styled.div`
background-color: white !important; 
z-index: 1;
width: 100%;
height: 100%;
min-height: 200vh;
`
const ButtonsNavigation = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    padding: 10px;
    a{
        font-weight: 900;
        letter-spacing: 1px;
        color: green;
        font-size: 12px;
        font-family: 'Inter';
        user-select: none;

        &:hover{
            cursor: pointer;
        }

    }
    button{
        font-size: 16px;
        letter-spacing: 2px;
        padding: 10px;
        font-weight: 800;
        text-align: center;
        font-family: 'Inter';
        border: none;
        border-radius: 5px;

        transition: 0.1s ease-in-out;
        &:hover{
            cursor: pointer;
            color: green;
            box-shadow: 0px 0px 10px rgba(0,255,0,0.3);
        }
    }
    `


const Container = styled.div`
    width: 100vw;
    height: 100%;
    margin-bottom: 200px;
    min-height: 100vh;
    text-transform: uppercase;
    background-color: white !important; 
    strong{
        font-weight: 700;
        
    }
    
    .quadro{
        margin-top: 2px;
        border: 1px solid black;
        padding: 2px;

        h6{
            margin-top: 8px;
        }
    }

    .instrumento{
        
        letter-spacing: 3px;
    }
    .negrito{
        font-weight: 700;
    }
    .alinhamento-esquerdo{
        width: 90%;
        padding-left: 50px !important;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    img{
        
        width: 90%;
        height: 50%;
        object-fit: contain;
        justify-content: center;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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


