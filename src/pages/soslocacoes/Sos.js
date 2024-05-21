import React, { useState } from 'react'
import styled from 'styled-components'
import sosLogo from "/home/servidor/www/fusion-contratos/src/utils/images/sos.png";

export default function Sos() {
    const [ nome, setNome ] = useState();
    const [ endereco, setEndereco ] = useState();
    const [ cep, setCep ] = useState();
    const [ cidade, setCidade ] = useState();
    const [ telefone, setTelefone ] = useState();
    const [ cnpj, setCnpj ] = useState();
    const [ email, setEmail ] = useState();


  return (
    <Container>
        <img src={sosLogo} alt="Logo SOS Locacoes" />
        <h3>Configure as regras do contrato</h3><br />
        <span>Digite os dados abaixo para gerar o contrato.</span>

        <br /><br />
        <form>
            <label>Nome/Razao Social:</label>
            <input type="text" placeholder='SOS LOCACOES COPIADORAS E IMPRESSORAS LTDA'></input>
            <label>Endereço:</label>
            <input type="text" placeholder='Avenida Siqueira Campos, 1590'></input>
            <label>CEP (APENAS NÚMEROS):</label>
            <input type="number" placeholder='19061000'></input>
            <label>Cidade + UF:</label>
            <input type="text" placeholder='PRESIDENTE PRUDENTE - SP'></input>
            <label>Telefone:</label>
            <input type="number" placeholder='(99) 99999-9999'></input>
            <label>CNPJ / CPF:</label>
            <input type="number" placeholder='99.999.999/9999-99'></input>
            <label>EMAIL:</label>
            <input type="email" placeholder='financeiro.copiadoras@outlook.com' ></input>
            <br />
            <br />

            <button disabled>PRÓXIMA ETAPA</button>
            <br />
            <span>Clique para seguir após ter digitado todos os itens</span>
            <br />
            <br />
        </form>
      
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
const ButtonEmpresa = styled.div`
    background-color: white;
    margin-top: 40px;
    width: 40%;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
    height: 50%;
    min-height: 300px;
    color: black;

    display: flex;
    justify-content:center;
    align-items: center;


    transition: 0.2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
        cursor: pointer;
    }
`;
const Container = styled.div`
    width: 100vw;
    height: 100%;

   /* background: linear-gradient(45deg, h.sl(239.06, 78.05%, 67.84%), hsl(235, 47.37%, 70.2%)); */
   
 display: flex;
 flex-direction: column;
  justify-content: center;
  align-items: center;


    
    img{
        margin-top: 20px;
        width: 250px;
        height: 150px;
        object-fit: contain;
    }
    font-family: 'Inter';
    tt{
        font-family: 'Inter';
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        margin-bottom: 20px;
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
    h3{
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 1.2px;
    }
    
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 10px;

        label{
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 800;
            margin-bottom: 5px;

        }
        button{
            font-size: 1rem;
            width: 84%;height: 50px;
            max-width: 642px;
            border-radius: 10px;
            text-transform: uppercase;
            font-weight: 800;

            &:hover{
                cursor: not-allowed;
            }
        }
        span{
            font-weight: 600;
        }
        input{
            font-size: 1rem;
            width: 80%;
            max-width: 600px !important;
            height: 15px;
            padding: 20px;
            border-radius: 10px;
            text-transform: uppercase;
            font-weight: 800;

            outline: none;
            border: thin solid black;

            margin-bottom: 25px;
            
            transition: 0.1s linear;
            &:focus{
                outline: none;
                border: thin solid black;

                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
            }
        }
    }
`;


