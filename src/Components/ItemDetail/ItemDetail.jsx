import { ModalBody, ModalFooter, ModalTitle } from "react-bootstrap"
import { useContext } from "react"
import { CardContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import ItemCountStock from "../ItemCountStock/ItemCountStock"
import Swal from "sweetalert2"
import ('./ItemDetail.css')

const ItemDetail = (products) => {

  const { addProduct } = useContext(CardContext)

  
  // funcion para agregar al carrito
  const handleAdd = (count)=> {
    addProduct({...products, count})
    Swal.fire({
      icon: "success",
      text: `Se agrego ${count} unidades`,
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
  }

    //* en la funcion handleAdd a count se le puede cambiar el nombre ya que
    //* es el nombre de un parametro y va a seguir siendo la variable count.
    //* Esto es debido a que esta funcion en itemCount tiene como parametro a count


  return (
    <div className="container-lg row bg-white containerDetail containerRow">
        <div className="col divDetailContainer">
          <ModalTitle>
            {products.titulo}
          </ModalTitle>
          <hr />
          <ModalBody>
              <h5>{products.autor}</h5>
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
            <img className='img' src={products.imagen} />
            {products.stock === 0 ? <ItemCountStock />: <ItemCount initial={1} stock={products.stock} handleAdd={handleAdd}></ItemCount> }
        </div>
    </div>
  )
}

export default ItemDetail