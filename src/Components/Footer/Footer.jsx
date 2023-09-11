import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>        
        <p className="col-md-4 mb-0 text">© 2023 Kevin Joel Noviello</p>
        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        <ul className="nav col-md-4">
            <li className="nav-item"><a href="#" className="text nav-link px-2">Home</a></li>
            <li className="nav-item"><a href="#" className="text nav-link px-2">Catálogo</a></li>
            <li className="nav-item"><a href="#" className="text nav-link px-2">Contacto</a></li>
            <li className="nav-item"><a href="#" className="text nav-link px-2">FAQs</a></li>
            <li className="nav-item"><a href="#" className="text nav-link px-2">Sobre nosotros</a></li>
        </ul>
    </footer>

  )
}

export default Footer