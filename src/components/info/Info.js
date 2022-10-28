import React from 'react';
import "./Info.css";
import certificadoDW from "../../media/certificadoDW.png";
import certificadoJavaScript from "../../media/certificadoJavaScript.png";
import certificadoReact from "../../media/certificadoReact.png";

const Info = () => {
  return (
    
    <div className='info-container'>
      <h1 className='titleCertificado'>Mis certificados</h1>
    <div className='info'>
        <div className='certificado'>
          <a href='https://www.coderhouse.com/certificados/628fbae7c17ec8001b3cc598' target="_blank">
        <img className="desarrolloWeb" src={certificadoDW} alt="" />
        </a>
        </div>
        <div className='certificado'>
        <a href='https://www.coderhouse.com/certificados/62e73889b64208002443885f' target="_blank">
        <img className="desarrolloWeb" src={certificadoJavaScript} alt="" />
        </a>
        </div>
        <div className='certificado'>
        <a href='https://www.coderhouse.com/certificados/634536cf2512cf000edfbfa2' target="_blank">
        <img className="desarrolloWeb" src={certificadoReact} alt="" />
        </a>
        </div>
    </div>

    </div>
  )
}

export default Info