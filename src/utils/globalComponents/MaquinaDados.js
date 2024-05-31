import React, { useState } from 'react';
import styled from'styled-components';

export default function MaquinaDados({maqNumber, setMaquinasDosContrato, maquinasDoContrato}) {
  const [serial, setSerial] = useState("");
  const [contador, setContador] = useState(0);
  const [controlInput, setControlInput] = useState(false);

  function adicionarNumeroSerieEContador(e){
    e.preventDefault();

    setControlInput(true);

    if(serial !== "" && contador !== 0){
        maquinasDoContrato.push(
            {
                serial: serial, 
                contador: contador
            });
            console.log(maquinasDoContrato);
    }

    return;
  }
  function editarNumeroDeSerial(e){
    e.preventDefault();

    window.alert("Recurso em desenvolvimento, aguardar.")
  }
  return (
    <Container>
        <img src="data:image/png;base64,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" alt='Imagem de uma impressora'/>
        <ColunaB>
            <form>
            <label>DIGITE O NUMERO DE SÉRIE:</label>
                <input
                autoFocus
                type="text"
                placeholder="EX.: BRBSR4R35S2X"
                minLength={5}
                disabled={controlInput ? true : false}
                onChange={(e) => setSerial(e.target.value)}
                required
                ></input>
                <label>DIGITE O CONTADOR INICIAL DA MÁQUINA</label>
                <input
                type="number"
                disabled={controlInput ? true : false}
                placeholder="EX.: 19523"
                onChange={(e) => setContador(e.target.value)}
                required
                ></input>
                {controlInput ? 
                    <button className='Editar' onClick={(e) => editarNumeroDeSerial(e) }> 🔧​ EDITAR</button> :
                    <button onClick={(e) => adicionarNumeroSerieEContador(e) }>✅​ SALVAR</button>
            }
                
            </form> 
        </ColunaB>

        <Identification><span>Máquina {maqNumber+1}</span></Identification>
    </Container>
  )
}
const Identification = styled.div`
    position: absolute;
    bottom: 5px;

    text-transform: uppercase;
    span{
        font-size: 12px !important;
        font-weight: 800 !important;

    }
`
const ColunaB = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        &:disabled{
            border:4px solid green!important;
        }
    }
    .Editar{
        border: 2px solid red!important;
            color: white !important;
            background-color: black !important;
    }
    button{
        width: 100% !important;
     
    }

`
const Container = styled.div`
margin-left: 10px;
margin-bottom: 20px;
position: relative;
    background-color: white;
    img{
        width: 40%;       
        height: 100%;
        object-fit: contain;
    }
    width: 90%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
    height: 300px;
    padding: 20px;
    display: flex;

    align-items: center;
    justify-content: center;


`