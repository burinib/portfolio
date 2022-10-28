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
        <img className="desarrolloWeb" src={certificadoDW} alt="" />
        </div>
        <div className='certificado'>
        <img className="desarrolloWeb" src={certificadoJavaScript} alt="" />
        </div>
        <div className='certificado'>
        <img className="desarrolloWeb" src={certificadoReact} alt="" />
        </div>
    </div>

    </div>
  )
}

export default Info