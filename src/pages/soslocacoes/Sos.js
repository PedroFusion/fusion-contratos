import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sosLogo from "../../utils/images/sos.png";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sos() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [controlButton, setControlButton] = useState(false);

  useEffect(() => {
    try {
      if (
        nome !== "" &&
        endereco !== "" &&
        cep !== "" &&
        cidade !== "" &&
        telefone !== "" &&
        cnpj !== "" &&
        email !== "" &&
        contato !== ""
      ) {
        setControlButton(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [nome, endereco, cep, cidade, telefone, cnpj, email, controlButton]);

  function GravandoDados(e) {
    e.preventDefault();

    const DadosdoContrato = {
      nome: nome,
      endereco: endereco,
      cep: cep,
      cidade: cidade,
      telefone: telefone,
      cnpj: cnpj,
      email: email,
      contato: contato
    };

    toast.info("Gravando os dados no sistema, um segundo.", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/config-contrato");
    }, 2000);

    localStorage.setItem("@dados-contrato", JSON.stringify(DadosdoContrato));
  }
  return (
    <Container>
      <img src={sosLogo} alt="Logo SOS Locacoes" />
      <h3>Configure as regras do contrato</h3>
      <br />
      <span>Digite os dados abaixo para gerar o contrato.</span>
      <br />
      <br />
      <ToastContainer />

      <form onSubmit={(e) => GravandoDados(e)}>
        <label>Nome/Razao Social:</label>
        <input
          type="text"
          placeholder="SOS LOCACOES COPIADORAS E IMPRESSORAS LTDA"
          onChange={(e) => setNome(e.target.value)}
          required
        ></input>
        <label>Endereço:</label>
        <input
          type="text"
          placeholder="Avenida Siqueira Campos, 1590"
          onChange={(e) => setEndereco(e.target.value)}
          required
        ></input>
        <label>CEP (APENAS NÚMEROS):</label>
        <input
          type="number"
          placeholder="19061000"
          required
          onChange={(e) => setCep(e.target.value)}
        ></input>
        <label>Cidade + UF:</label>
        <input
          type="text"
          required
          placeholder="PRESIDENTE PRUDENTE - SP"
          onChange={(e) => setCidade(e.target.value)}
        ></input>
        <label>Telefone:</label>
        <input
          type="number"
          required
          placeholder="(99) 99999-9999"
          onChange={(e) => setTelefone(e.target.value)}
        ></input><label>Nome do Contato:</label>
        <input
          type="text"
          required
          placeholder="Ex.: ANDRÉ VIDAL"
          onChange={(e) => setContato(e.target.value)}
        ></input>
        <label>CNPJ / CPF:</label>
        <input
          type="number"
          required
          placeholder="99.999.999/9999-99"
          onChange={(e) => setCnpj(e.target.value)}
        ></input>
        <label>EMAIL:</label>
        <input
          type="email"
          required
          placeholder="financeiro.copiadoras@outlook.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <br />
        {controlButton ? (
          <button className="next-round">PRÓXIMA FASE</button>
        ) : (
          <button disabled>PRÓXIMA ETAPA</button>
        )}

        <br />
        <span>Digite os dados para liberar o botão.</span>
        <br />
        <br />
      </form>

      <tt>PLATAFORMA DESENVOLVIDA POR: PEDRO HENRIQUE</tt>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;

  /* background: linear-gradient(45deg, h.sl(239.06, 78.05%, 67.84%), hsl(235, 47.37%, 70.2%)); */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .next-round {
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

      &:hover {
        cursor: not-allowed;
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
