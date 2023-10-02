import { useContext, useState} from 'react';
import { CardContext } from '../../../context/CartContext';
import Button from 'react-bootstrap/Button';


function CartForm() {
    const { handleOrders, handleOnChange, dataForm } = useContext(CardContext);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
      
        // Validación del campo nombre
        if (!dataForm.name) {
          newErrors.name = "El nombre es requerido.";
        }
      
        // Validación del campo email
        if (!dataForm.email) {
          newErrors.email = "El email es requerido.";
        } else if (!/\S+@\S+\.\S+/.test(dataForm.email)) {
          newErrors.email = "El email no es válido.";
        }
      
        // Validación del campo teléfono
        if (!dataForm.phone) {
          newErrors.phone = "El teléfono es requerido.";
        } 
      
        // Devuelve los errores encontrados
        return newErrors;
      };
   

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length === 0) {
            // No hay errores, puedes continuar con la lógica para confirmar la compra
            // Por ejemplo, llamar a handleOrders() para crear una orden
            handleOrders();
        } else {
            setErrors(validationErrors);
            // Hay errores de validación, actualiza el estado de errores
        }
        
    };

    return (
        <div className="containerForm">
            <form className='form' onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <input type="text" id="nombre" name="name" placeholder='John Doe' required
                    value={dataForm.name}
                    onChange={handleOnChange}
                        />
                    <label className='label' htmlFor="nombre">Nombre y Apellido</label>
                    {errors.name && <h4 className="error-message">{errors.name}</h4>}
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder='example@gmail.com' required
                    value={dataForm.email}
                    onChange={handleOnChange}
                        />
                    <label className='label' htmlFor="email">Email</label>
                    {errors.email && <h4 className="error-message">{errors.email}</h4>}
                </div>
                <div className="form-group">
                    <input type="tel" id="telefono" name="phone" placeholder='341-1222222' required
                    value={dataForm.phone}
                    onChange={handleOnChange}
                        />
                    <label className='label' htmlFor="telefono">Teléfono</label>
                    {errors.phone && <h4 className="error-message">{errors.phone}</h4>}
                </div>
                <Button variant="success" type="submit">
                    <i className="ri-check-line icon"></i>Confirmar mi compra
                </Button>
            </form>
        </div>
    );
}

export default CartForm;