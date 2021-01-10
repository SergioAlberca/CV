import React, { useState } from "react";

interface contactProps {
  loading: boolean;
  showErrorMessage: boolean;
  showConfirmationMessage: boolean;
  sendNotification: any;
  personalData: any;
}

function Contact(props: contactProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const buildData = (e: any) => {
    e.preventDefault();
    let data = {
      message: message,
      subject: subject,
      nameSender: name,
      emailSender: email,
      date: "07/01/2021",
    };
    return data;
  };

  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contacto</h5>
          <h1>¡Me encantaría escuchar de ti!</h1>

          <p className="lead">
            Si quieres contactar conmigo sólo tienes que rellenar el siguiente
            formulario y me pondré en contacto contigo a la mayor brevedad
            posible.
          </p>
        </div>
      </div>

      <div className="row contact-form">
        <div className="col-twelve">
          <form>
            <fieldset>
              <div className="form-field">
                <input
                  name="contactName"
                  type="text"
                  id="contactName"
                  placeholder="Nombre"
                  value={name}
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <input
                  name="contactEmail"
                  type="email"
                  id="contactEmail"
                  placeholder="Email"
                  value={email}
                  required={true}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <input
                  name="contactSubject"
                  type="text"
                  id="contactSubject"
                  placeholder="Asunto"
                  value={subject}
                  onChange={(e: any) => setSubject(e.target.value)}
                />
              </div>
              <div className="form-field">
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  placeholder="Mensaje"
                  rows={10}
                  cols={50}
                  value={message}
                  required={true}
                  onChange={(e: any) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="form-field">
                {!props.loading && (
                  <button
                    className="submitform"
                    type="submit"
                    onClick={(e) => props.sendNotification(buildData(e))}
                  >
                    Enviar
                  </button>
                )}
                {props.loading && (
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
          {props.showErrorMessage && (
            <div id="message-warning">
              Error al enviar el mensaje, inténtelo de nuevo más tarde.
              <br />
            </div>
          )}
          {props.showConfirmationMessage && (
            <div id="message-success">
              <i className="fa fa-check"></i>Tu mensaje ha sido enviado, ¡muchas
              gracias!
              <br />
            </div>
          )}
        </div>
      </div>

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>

          <h5>DONDE ENCONTRARME</h5>

          <p>
            {props.personalData.city}
            <br />
            {props.personalData.province}
            <br />
            {props.personalData.country}
          </p>
        </div>

        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>
          <h5>Envíeme un correo electrónico a</h5>
          <p>
            {props.personalData.email} <br /> {props.personalData.secondEmail}
          </p>
        </div>

        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>
          <h5>Llámame a</h5>
          <p>
            Móbil: ({props.personalData.prefixPhone}) {props.personalData.phone}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
