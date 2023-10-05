import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Swal from 'sweetalert2'

export const useContact = () => {
  
    const [contactDataForm, setContactDataForm] = useState({
        nombres: '',
        emails: '',
        textArea: '',
    });

    const handleOnChancheContact = (evt) => {
        setContactDataForm({
            ...contactDataForm,
            [evt.target.name]: evt.target.value,
        })
    };

    const consult = {}
    const queryDB = getFirestore()

    const submitContactForm = (event) => {
        event.preventDefault();

        consult.client = contactDataForm
        const messageCollection = collection(queryDB, 'message')
        addDoc(messageCollection, consult)
        .then((resp)=>{
            Swal.fire({
                icon: "success",
                text: `Enviado! Responderemos a la brevedad.`,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            })
            console.log(resp);
        })
        .catch((err)=>{
            Swal.fire({
                icon: "success",
                text: `Algo salió mal. Intente más tarde`,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            })
            console.error(err)
        })
        .finally(()=> {
            setContactDataForm({
            nombres: '',
            emails: '',
            textArea: '',
            })
        })
    }
  
    return {handleOnChancheContact, submitContactForm, contactDataForm }
}
