import NavScrollExample from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Hr from './Components/Hr/Hr';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {


  return (
    <>
      <NavScrollExample></NavScrollExample>
      <Hr></Hr>
      <main className='main'>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
        <ItemListContainer saludo='Bienvenido' cuerpo='Esta es una tarjeta'></ItemListContainer>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
