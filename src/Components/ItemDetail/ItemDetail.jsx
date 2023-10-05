import { ModalBody, ModalFooter, ModalTitle } from "react-bootstrap"
import { useContext } from "react"
import { CardContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import ItemCountStock from "../ItemCountStock/ItemCountStock"
import ('./ItemDetail.css')

const ItemDetail = (products) => {

  const { addProduct} = useContext(CardContext)
  const handleAdd = (count)=> {
    addProduct({...products, count})
  }

  return (
    <div className="container-lg row bg-white containerDetail containerRow">
        <div className="col divDetailContainer">
          <ModalTitle>
            {products.titulo}
          </ModalTitle>
          <hr />
          <ModalBody>
              <h5>{products.autor}</ h5>
              <hr />
              <p className="pDescripcion">
                  {products.descripcion}
              </p>
              <hr />
              <div className='divDisponibilidad'>
                  <p>
                    <strong>Categoría: {products.categoria}</strong>
                  </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <p>
                Disponibilidad: {products.stock} unidades.
              </p>
            </ModalFooter>
        </div>
        <div className="col divDetailContainer contador">
          <div className="divImg">
            <h3>${products.precio.toFixed(2)}</h3>
            <hr />
            <img className='img' src={products.imagen} />
          </div>
            {products.stock === 0 ? <ItemCountStock />: <ItemCount initial={1} stock={products.stock} handleAdd={handleAdd}></ItemCount> }
        </div>
    </div>
  )
}

export default ItemDetail


