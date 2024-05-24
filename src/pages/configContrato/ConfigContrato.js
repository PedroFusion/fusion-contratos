import React, { useState } from "react";
import styled from "styled-components";
import sosLogo from "../../utils/images/sos.png";
import ResumeContrato from "../../utils/globalComponents/ResumeContrato.js";

export default function ConfigContrato() {
  const [qtdMaquinas, setQtdMaquinas] = useState(0);
  const [valorContrato, setValorContrato] = useState(0);
  const [dia, setDia] = useState(0);
  const [prazoContrato, setPrazoContrato] = useState(0);

  return (
    <Container>
      <img src={sosLogo} alt="Logo SOS Locacoes" />
      <h3>Configure as regras do contrato</h3>
      <br />
      <br />
      <br />
      <ResumeContrato />
      <form>
        <label>QUAL A QUANTIDADE DE MÁQUINAS?</label>
        <input
          type="number"
          placeholder="EX.: 1"
          minLength={1}
          onChange={(e) => setQtdMaquinas(e.target.value)}
          required
        ></input>
        <label>QUAL O VALOR GLOBAL DO CONTRATO?</label>
        <input
          type="number"
          placeholder="R$ 1200"
          onChange={(e) => setValorContrato(e.target.value)}
          required
        ></input>
        <label>QUAL O DIA DO VENCIMENTO? (DIGITE APENAS O DIA)</label>
        <input
          type="number"
          placeholder="10"
          onChange={(e) => setDia(e.target.value)}
          required
        ></input>
        <label>QUAL O PRAZO DO CONTRATO? (EM MESES)</label>
        <input
          type="number"
          placeholder="EX.: 12"
          onChange={(e) => setPrazoContrato(e.target.value)}
          required
        ></input>
        <button>PRÓXIMA</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 20px;
    width: 250px;
    height: 150px;
    object-fit: contain;
  }
  font-family: "Inter";
  tt {
    font-family: "Inter";
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  h1 {
    font-weight: 900;
    font-size: 3rem;
    text-transform: uppercase;
  }
  span {
    font-weight: 300;
    font-size: 1rem;
  }
  h3 {
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1.2px;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 10px;

    label {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 800;
      margin-bottom: 5px;
    }
    button {
      font-size: 1rem;
      width: 84%;
      height: 50px;
      max-width: 642px;
      border-radius: 10px;
      text-transform: uppercase;
      font-weight: 800;
      background-color: rgba(255, 0, 0, 00.3);

      border: 2px solid lightgreen;
      color: lightgreen;
      letter-spacing: 2px;
      font-family: "Inter";
      font-weight: 800;
      background-color: #000;

      &:hover {
        cursor: pointer;
      }
    }
    span {
      font-weight: 600;
    }
    input {
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
      &:focus {
        outline: none;
        border: thin solid black;

        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
      }
    }
  }
`;
