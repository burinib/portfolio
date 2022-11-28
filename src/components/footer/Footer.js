import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css"

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    mail: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nombre: values.name,
      msg: values.content,
      mail: values.mail,
      reply_to: "braianb55@hotmail.com",
      };


    if (values.name && values.mail && values.content) {
      emailjs
        .send(
          "service_j8i7mtt",
          "template_v52b1cl",
          data,
          "0IM3LQrhvG6g8V6eG"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("El correo se ha enviado de forma exitosa");
          },
          (error) => {
            console.log(error.text);
            alert("Ocurrió un problema al enviar el correo");
          }
        );
    } else {
      alert("Debe completar todos los campos para enviar el mensaje. Gracias!");
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      className={
        "contact footer"
      }
    >
      <h1>Contact</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className={
            "input"
          }
          type="text"
          name="name"
          id="1"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className={
            "input"
          }
          type="mail"
          name="mail"
          id="2"
          value={values.mail}
          onChange={handleChange}
          placeholder="Mail"
        />

        <input
          className={
            "input"
          }
          type="text"
          name="content"
          id="3"
          value={values.content}
          onChange={handleChange}
          placeholder="Message"
        />
        <button className="button" type="submit">
          Send
        </button>
      </form>
      <div className="redes">

      <div className="sns-links">
            <a href="https://www.linkedin.com/in/braian-burini-a440501a8/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin linkedin"></i>
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter twitter"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook facebook"></i>
            </a>
        </div>
    </div>
    </div>
  );
};

export default Contact;