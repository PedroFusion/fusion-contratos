import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sosLogo from "../../utils/images/sos.png";
import ResumeContrato from "../../utils/globalComponents/ResumeContrato.js";
import MaquinaDados from "../../utils/globalComponents/MaquinaDados.js";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import BlockRightClickAndKeys from "../../utils/globalComponents/blockUserClick.js";

export default function ConfigContrato() {
  const navigate = useNavigate();
  const [qtdMaquinas, setQtdMaquinas] = useState(0);
  const [valorContrato, setValorContrato] = useState(0);
  const [franquia, setFranquia] = useState(0);
  const [excedente, setExcedente] = useState(0);
  const [dia, setDia] = useState(0);
  const [prazoContrato, setPrazoContrato] = useState(0);
  const [control, setControl] = useState(false);
  let [maquinasDoContrato, setMaquinasDosContrato] = useState([]);
  let [listaMaquinas, setListaMaquinas] = useState([]);
  const [mostraBotaoDepoisDeObterNumeroDeSerie, setMostraBotaoDepoisDeObterNumeroDeSerie] = useState(false);
  
  var Lista = [];
  
  useEffect(() => {
    if(qtdMaquinas !== 0) {
      for (let i = 0; i < qtdMaquinas; i++) {
        Lista.push(i);
      }
      setListaMaquinas(Lista);

    }

    if(listaMaquinas.length !== 0 && maquinasDoContrato.length !== 0 && listaMaquinas.length === maquinasDoContrato.length ) { 
     atualizaControleDoBotao();
    }
  }, [qtdMaquinas, maquinasDoContrato, listaMaquinas]);

  function atualizaControleDoBotao(){
    if(mostraBotaoDepoisDeObterNumeroDeSerie === false) {
      setMostraBotaoDepoisDeObterNumeroDeSerie(true);
     
    } else {
      window.scrollTo({ top: 2500, behavior: "smooth" })
    };
  }

  function goToModelAndSerial (e){
    e.preventDefault();
    
    setControl(true);

  }


  function salvarSerialeContradorLocalStorage(){
    toast.info("Gravando os dados no sistema, um segundo.", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
      navigate("/last-review");
    }, 2000);

    localStorage.setItem("@maquinas", JSON.stringify(maquinasDoContrato));
    localStorage.setItem("@vencimento", JSON.stringify({
        valorContrato: valorContrato,
        dataVencimento: dia,
        prazoContrato: prazoContrato,
        franquia: franquia,
        excedente: excedente,
        qtdMaquinas: maquinasDoContrato.length

    }));
  }
  return (
    <BlockRightClickAndKeys>
      <Container>
        <img src={sosLogo} alt="Logo SOS Locacoes" />
        <h3>Configure as regras do contrato</h3>
        <br />
        <br />
        <br />
        <ResumeContrato />
        <ToastContainer />
        {!control ?  
        <form onSubmit={(e) => goToModelAndSerial(e)}>
          <label>QUAL A QUANTIDADE DE MÁQUINAS?</label>
          <input
            type="number"
            onBlur={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
            placeholder="EX.: 1"
            min={1}
            autoFocus
            onChange={(e) => setQtdMaquinas(e.target.value)}
            required
          ></input>
          <label>QUAL O VALOR GLOBAL DO CONTRATO?</label>
          <input
          onBlur={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
            type="number"
            placeholder="R$ 1200"
            min={50}
            onChange={(e) => setValorContrato(e.target.value)}
            required
          ></input>
          <label>QUAL A FRANQUIA DE PÁGINAS DO CONTRATO? (TOTAL)</label>
          <input
          onBlur={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
            type="number"
            placeholder="1200"
            min={10}
            onChange={(e) => setFranquia(e.target.value)}
            required
          ></input>
          <label>QUAL O VALOR DO EXCEDENTE (POR PÁGINA)?</label>
          <input
          onBlur={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
            type="number"
            placeholder="R$ 0,05"
            step="0.01"
            onChange={(e) => setExcedente(e.target.value)}
            required
          ></input>
          <label>QUAL O DIA DO VENCIMENTO? (DIGITE APENAS O DIA)</label>
          <input
            type="number"
            onBlur={() => window.scrollTo({ top: 2000, behavior: "smooth" })}
            placeholder="10"
            max={31}
            onChange={(e) => setDia(e.target.value)}
            required
          ></input>
          <label>QUAL O PRAZO DO CONTRATO? (EM MESES)</label>
          <input
            onBlur={() => window.scrollTo({ top: 2500, behavior: "smooth" })}
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
        <>
          <ListMaquinasDiv onLoad={() => {window.scrollTo({ top: 2500, behavior: "smooth" })}}>
              {listaMaquinas.map((item, index ) => <MaquinaDados key={index} maqNumber={index} setMaquinasDosContrato={setMaquinasDosContrato} maquinasDoContrato={maquinasDoContrato}/>) }
          </ListMaquinasDiv>
          {mostraBotaoDepoisDeObterNumeroDeSerie ? <BtnGo onClick={() => salvarSerialeContradorLocalStorage()}>PROXIMO</BtnGo> : <></>}
        </>
            :
            <span>Ops! parece que aconteceu algum problema técnico, acionar o T.I. (Pedro Henrique)</span>
          
        }

      </Container>
    </BlockRightClickAndKeys>
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

      animation: btnAnimation 1s ease-in-out infinite;

      @keyframes btnAnimation{
        0% {
          transform: scale(1);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

        } 50% {
          transform: scale(1.1);
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        } 100% {
          transform: scale(1);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

        }
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
  .button-go {
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
