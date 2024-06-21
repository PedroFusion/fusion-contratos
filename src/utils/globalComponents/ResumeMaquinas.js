import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaUserEdit,FaEdit } from "react-icons/fa";

import { useNavigate } from "react-router";

export default function ResumeMaquinas() {
  const [data, setData] = useState(null);
  const [vencimento, setVencimento] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data === null) {
      setData(JSON.parse(localStorage.getItem("@maquinas")));
    }

    if (vencimento === null) {
      setVencimento(JSON.parse(localStorage.getItem("@vencimento")));
    }
  }, [data, vencimento]);
  console.log(data)
  function changeData() {
    if (window.confirm("Tem certeza que deseja editar esses dados?")) {
      navigate("/config-contrato");
    }
  }

  return (
    <>
      <Container>
        {data === null ? (
          <>
            <h3>Aguarde, estou obtendo as informações das Máquinas...</h3><br />
            <label><strong onClick={() => {navigate("/config-contrato") }}>Clique aqui</strong> para atualizar os dados das máquinas do contrato</label>
          </>
        ) : 
          <>
            <IconChange onClick={() => changeData()}>
              <FaEdit />
              EDITAR
            </IconChange>

            <h3>MÁQUINA(S) - {data.length} UNIDADE(S)</h3>
            <br />
            { data.map((item) => <MaquinasContainer>
            MÁQUINA: <strong>{item.modelo}</strong>   | SERIE: <strong>{item.serial} </strong> | CONTADOR INICIAL: <strong>{item.contador}</strong>
            
            </MaquinasContainer>)}

            
              
          </>
  }
      </Container>

      <Container>
        {data === null ? (
          <>
            <h3>Aguarde, estou obtendo as informações das Máquinas...</h3><br />
            <label><strong onClick={() => {navigate("/config-contrato") }}>Clique aqui</strong> para atualizar os dados das máquinas do contrato</label>
          </>
        ) : 
          <>
            <IconChange onClick={() => changeData()}>
              <FaEdit />
               EDITAR
            </IconChange>

              <h3>DADOS DO CONTRATO</h3>
              <br />
            <ContratoContainer>

              <span><strong>DATA DE FECHAMENTO (DIA DO VENCIMENTO)..::</strong> DIA {vencimento.dataVencimento} </span>
              <br />
              <span><strong>VALOR GLOBAL DO CONTRATO..::</strong>   R$ {Number(vencimento.valorContrato).toFixed(2).replace(".", ",")}</span>
              <br />
              <span><strong>PRAZO DO CONTRATO..:: </strong> {vencimento.prazoContrato} MESES </span>
            </ContratoContainer>
            
              
          </>
  }
      </Container>
    </>
  );
}
const ContratoContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
padding: 20px;
justify-content: center;
align-items: center;
margin-bottom: 10px;

font-size: 1.4rem;
span{
font-size: 1.4rem;

}
strong{
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 800;
}
`
const MaquinasContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: center;
  background-color: rgba(0,0,0,0.1);
  align-items: center;
  margin-bottom: 10px;
  border: 1px rgba(0,0,0,0.2) solid;

  font-size: 1.4rem;
  span{
  font-size: 1.4rem;

  }
  strong{
    margin-right: 10px;
    margin-left: 10px;

    font-weight: 800;
  }
`
const IconChange = styled.button`
  background-color: white;
  display: flex;

  :nth-child(1) {
    font-size: 1rem;
    margin-right: 4px;
  }

  position: absolute;
  right: 40px;
  top: 10px;
  padding: 5px;

  border: none;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  transition: 0.3s linear;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 255, 0, 0.3);
    font-weight: 800;
  }
`;
const Endereco = styled.div`
  display: flex;
  width: 100%;
  max-width: 742px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);

  text-transform: uppercase !important;


  h3 {
    font-weight: 900;
  }

  label {
    font-size: 0.7 rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  strong {
    font-weight: 800;

    &:hover{
      cursor:  pointer;
    }
  }
`;
