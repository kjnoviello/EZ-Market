import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Navbar from './Components/Navbar/Navbar'
// import NavbarBrand from 'react-bootstrap'
import NavScrollExample from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <>
      <NavScrollExample></NavScrollExample>
      <main className='main'>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
      </main>
    </>
  )
}

export default App
