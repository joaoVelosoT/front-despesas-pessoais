import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
    const {id} = useParams();

    const navigate = useNavigate();
    const handleContact = () => {
        console.log("Contato enviado");
        return navigate("/")
    }
    return (
        <>
        <h1>Exibindo mais informações do id {id}</h1>
        <button onClick={handleContact}>Enviar mensagem</button>
        </>
    )
}

export default ContactDetails;