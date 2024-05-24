import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sosLogo from "../../utils/images/sos.png";
import ResumeContrato from "../../utils/globalComponents/ResumeContrato.js";
import MaquinaDados from "../../utils/globalComponents/MaquinaDados.js";
import List from "../../utils/globalComponents/ListCreator.js";

export default function ConfigContrato() {
  const [qtdMaquinas, setQtdMaquinas] = useState(0);
  const [valorContrato, setValorContrato] = useState(0);
  const [dia, setDia] = useState(0);
  const [prazoContrato, setPrazoContrato] = useState(0);
  const [control, setControl] = useState(false);
  let [listaMaquinas, setListaMaquinas] = useState([]);

  var Lista = [];
  
  useEffect(() => {
    if(qtdMaquinas !== 0) {
      for (let i = 0; i < qtdMaquinas; i++) {
        Lista.push(i);
      }
      setListaMaquinas(Lista);

    }
  }, [qtdMaquinas]);

  function goToModelAndSerial (e){
    e.preventDefault();
        
    setControl(true);
    console.log(listaMaquinas)

  }
  return (
    <Container>
      <img src={sosLogo} alt="Logo SOS Locacoes" />
      <h3>Configure as regras do contrato</h3>
      <br />
      <br />
      <br />
      <ResumeContrato />

      {!control ?  
      <form onSubmit={(e) => goToModelAndSerial(e)}>
        <label>QUAL A QUANTIDADE DE MÁQUINAS?</label>
        <input
          type="number"
          placeholder="EX.: 1"
          min={1}
          autoFocus
          onChange={(e) => setQtdMaquinas(e.target.value)}
          required
        ></input>
        <label>QUAL O VALOR GLOBAL DO CONTRATO?</label>
        <input
          type="number"
          placeholder="R$ 1200"
          min={50}
          onChange={(e) => setValorContrato(e.target.value)}
          required
        ></input>
        <label>QUAL O DIA DO VENCIMENTO? (DIGITE APENAS O DIA)</label>
        <input
          type="number"
          placeholder="10"
          max={31}
          onChange={(e) => setDia(e.target.value)}
          required
        ></input>
        <label>QUAL O PRAZO DO CONTRATO? (EM MESES)</label>
        <input
          type="number"
          min={6}
          placeholder="EX.: 12"
          onChange={(e) => setPrazoContrato(e.target.value)}
          required
        ></input>
        <button>PRÓXIMA</button>
      </form> 
      : 
      
      
      listaMaquinas.length > 0 ? 
      <ListMaquinasDiv>
          {listaMaquinas.map((item, index ) => <MaquinaDados key={index} maqNumber={index} />) }
      </ListMaquinasDiv>
          :
          <span>Ops! parece que aconteceu algum problema técnico, acionar o T.I. (Pedro Henrique)</span>
        
      }

      <BtnGo>PROXIMO</BtnGo>
    </Container>
  );
}
const BtnGo = styled.button`
margin-top: 20px;
margin-bottom: 20px;


      font-size: 1.2rem;
      letter-spacing: 1.3px;
      width: 84%;
      height: 50px;
      max-width: 642px;
      border: none;
      border-radius: 10px;
      text-transform: uppercase;
      font-weight: 900 !important;
      color: lightgreen;
      background-color: rgba(0, 0, 0, 1);

      &:hover {
        cursor: pointer;
      }
    
`
const ListMaquinasDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

flex-wrap: wrap;

`
const Container = styled.div`
  width: 100%;
  height: auto;
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
