import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function ResumeContrato() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data === null) {
      setData(JSON.parse(localStorage.getItem("@dados-contrato")));
    }
  }, [data]);

  function changeData() {
    if (window.confirm("Tem certeza que deseja editar esses dados?")) {
      navigate("/sos");
    }
  }

  return (
    <Container>
    {data === null ? (
      <>
        <h3>Aguarde, estou obtendo as informações do contrato...</h3><br />
        <label><strong onClick={() => {navigate("/") }}>Clique aqui</strong> para atualizar os dados do contrato</label>
      </>
    ) : (
      <>
        <IconChange onClick={() => changeData()}>
          <FaUserEdit />
          EDITAR
          {/* <h3>ALTERAR DADOS</h3> */}
        </IconChange>

        <h3>CABEÇALHO DO CONTRATO</h3>
        <br />
        <label>
          <strong>Nome/Razão Social:</strong> {data.nome}
        </label>
        <br />
        <Endereco>
          <label>
            <strong>Endereço:</strong> {data.endereco}
          </label>
          <br />
          <label>
            <strong>CEP:</strong> {data.cep}
          </label>
          <br />
          <label>
            <strong>Cidade:</strong> {data.cidade}
          </label>
        </Endereco>
        <br />
        <label>
          <strong>Telefone:</strong> {data.telefone}
        </label>
        <br />
        <label>
          <strong>Contato:</strong> {data.contato}
        </label>
        <br />
        <label>
          <strong>Email:</strong> {data.email}
        </label>
        <br />
        <label>
          <strong>CNPJ/CPF:</strong> {data.cnpj}
        </label>
      </>
    )}
  </Container>
  );
}
const IconChange = styled.button`
  background-color: white;
  display: flex;

  :nth-child(1) {
    font-size: 1rem;
    margin-right: 5px;
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
