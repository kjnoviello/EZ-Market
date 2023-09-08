import { ModalBody, ModalFooter, ModalTitle } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import ('./ItemDetail.css')

const ItemDetail = (products) => {

     //funcion agregar al carrito
     const handleAdd = (count)=> {
      console.log(`Agregando ${count} unidad/es al carrito`);
      console.log(count);
    }


  return (
    <div className="container row bg-white containerDetail">
        <div className="col divDetailContainer">
          <ModalTitle>
            {products.titulo}
          </ModalTitle>
          <hr />
          <ModalBody>
              <h5>{products.autor}</h5>
              <hr />
              <p>
                  {products.descripcion}
              </p>
              <hr />
              <div className='divDisponibilidad'>
                  <p>
                    Categoría: {products.categoria}
                  </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <p>
                Disponibilidad: {products.stock} unidades.
              </p>
            </ModalFooter>
        </div>
        <div className="col divDetailContainer rightDown">
            <ItemCount initial={1} stock={products.stock} handleAdd={handleAdd} className="itemCount" ></ItemCount>
        </div>
    </div>
  )
}

export default ItemDetail