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
    
    <>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name= 'email' 
            value={dataForm.email}
            onChange={handleOnChange}
            />
            <div id="emailHelp" className="form-text">We never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label  className="form-label">phone</label>
            <input type="tel" className="form-control" id="exampleInputPassword1" 
            name= 'phone'
            value={dataForm.phone}
            onChange={handleOnChange}
            />
        </div>
        <div className="mb-3">
            <label  className="form-label">name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" 
            name= 'name'
            value={dataForm.name}
            onChange={handleOnChange}
            />
        </div>
        <Button variant="success" type="submit" >
            <i className="ri-check-line icon"></i>Confirmar mi compra
        </Button>
    </form>
    </>
    
  );
}

export default CartForm;