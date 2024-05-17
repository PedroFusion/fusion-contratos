import React from 'react'
import styled from 'styled-components'


export default function Fusion() {
  return (
    <Container>
        <h1>CONTRATO Fusion</h1><br />
      
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
    box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    height: 50%;
    min-height: 300px;
    color: black;

    display: flex;
    justify-content:center;
    align-items: center;


    transition: 0.2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 30px rgba(0,0,0,0.6);
        cursor: pointer;
    }
`;
const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: linear-gradient(45deg, hsl(239.06, 78.05%, 67.84%), hsl(235, 47.37%, 70.2%));

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: aliceblue;

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


