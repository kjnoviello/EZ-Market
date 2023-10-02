import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import ('./PageNotFound.css')

const PageNotFound = () => {
  return (
    <>
        <div className="divNotFound">
            <img src="./error-404.jpg" alt="404" className="imagenNotFound" />
            <Link to='/'>
                <Button variant="success" id="btnNotFound">Ir al Home</Button>
            </Link>
        </div>
    </>
  )
}

export default PageNotFound