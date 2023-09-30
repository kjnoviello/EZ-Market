import { useContext } from 'react';
import { CardContext } from '../../../context/CartContext';
import Button from 'react-bootstrap/Button';


function CartForm(dataForm) {
    const { handleOrders, handleOnChange } = useContext(CardContext);

    const handleSubmit = (event) => {
        console.log(dataForm);
        if(dataForm !== ''){
            event.preventDefault(); 
            handleOrders();
        }
    };

    return (
        <div className="containerForm">
            <form className='form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" id="nombre" name="name" placeholder='John Doe' required
                    value={dataForm.name}
                    onChange={handleOnChange}
                        />
                    <label className='label' htmlFor="nombre">Nombre y Apellido</label>
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder='example@gmail.com' required
                    value={dataForm.email}
                    onChange={handleOnChange}
                        />
                    <label className='label' htmlFor="email">Email</label>
                </div>
                <div className="form-group">
                    <input type="tel" id="telefono" name="phone" placeholder='341-1222222' required
                    value={dataForm.phone}
                    onChange={handleOnChange}
                        />
                    <label className='label' htmlFor="telefono">Teléfono</label>
                </div>
                <Button variant="success" type="submit" >
                    <i className="ri-check-line icon"></i>Confirmar mi compra
                </Button>
            </form>
        </div>
    );
}

export default CartForm;