import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import ('./PageNotFound.css')

const PageNotFound = () => {

  const navigate = useNavigate();
  return (
    <>
        <div className="divNotFound">
            <img src="./error-404.jpg" alt="404" className="imagenNotFound" />
            <Link to='/'>   
                  <Button variant="success" id="btnNotFound">Ir al Home</Button>
                  <Button variant="success" id="btnNotFound" onClick={()=> navigate(-2)}>Volver</Button>
            </Link>
        </div>
    </>
  )
}

export default PageNotFound