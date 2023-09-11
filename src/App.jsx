import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import NavScroll from './Components/NavScroll/NavScroll';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import QuienesSomos from './Components/QuienesSomos/QuienesSomos';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Main from './Components/Main/Main';
// import ItemDetail from './Components/ItemDetail/ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  useEffect(()=>{
    console.log(`este es useEffect 2 y se llama solo una vez`);
  }, [])

  return (
    <BrowserRouter>
      <NavScroll />
      <Routes>
        <Route path='/' element={<>
                                  <QuienesSomos titulo={"¡Bienvenidos a EZ Market!"}/>
                                  <Main titulo={"Nuestro catálogo"}>
                                    <ItemListContainer/>
                                  </Main>
                                </>}/>
        <Route path='/QuienesSomos' element={<QuienesSomos titulo={"Acerca de nosotros..."} />}/> 
        <Route path='/Productos' element={<Main titulo={"Todos"}>
                                          <ItemListContainer/>
                                        </Main>}/>
        <Route path='/Productos/:cid' element={<Main titulo={"Novelas"}>
                                          <ItemListContainer/>
                                        </Main>}/>
        <Route path='/Detalle/:pid' element={<Main titulo={"Detalles del libro"}>
                                              <ItemDetailContainer/>
                                            </Main>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
