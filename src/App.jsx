import NavScroll from './Components/NavScroll/NavScroll';
import Hr from './Components/Hr/Hr';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import QuienesSomos from './Components/QuienesSomos/QuienesSomos';
import Cardwidget from './Components/CardWidget/Cardwidget';
import { useEffect } from 'react';
import './Components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  useEffect(()=>{
    console.log(`este es useEffect 2 y se llama solo una vez`);
  }, [])

  return (
    <>
      <NavScroll>
        <Cardwidget/>
      </NavScroll>
      <Hr/>
      <QuienesSomos/>
      <Hr/>
      <ItemListContainer/>
      <Footer/>
    </>
  )
}

export default App
