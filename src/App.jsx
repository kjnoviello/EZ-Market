import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardContextProvider  from './context/CartContext';
import NavScroll from './Components/NavScroll/NavScroll';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import QuienesSomos from './Components/QuienesSomos/QuienesSomos';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Contact from './Components/Contact/Contact';
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import OrderSearch from './Components/OrderSearch/OrderSearch';


function App() {
 
  return (
    <BrowserRouter>
      <CardContextProvider>
        <NavScroll />
        <Routes>
          <Route path='/' element={ <>
                                      <QuienesSomos titulo={"¡Bienvenidos a EZ Market!"}/>
                                      <Main titulo={"Nuestro catálogo"}>
                                        <ItemListContainer/>
                                      </Main>
                                    </>}/>
          <Route path='/QuienesSomos' element={<QuienesSomos titulo={"Acerca de nosotros..."} />}/> 
          <Route path='/Productos' element={  <Main titulo={"Nuestro catalogo"}>
                                                <ItemListContainer/>
                                              </Main>}/>
          <Route path='/Categoria/:cid' element={ <Main titulo={"Libros"} novela={"Novelas"} novedades={"Novedades"} clasicos={"Clásicos"}>
                                                    <ItemListContainer/>
                                                  </Main>}/>
          <Route path='/Detalle/:pid' element={ <Main titulo={"Detalles del libro"}>
                                                  <ItemDetailContainer/>
                                                </Main>}/>
          <Route path='/Contacto' element={ <Main titulo={"Contacto"}>
                                              <Contact/>
                                            </Main>}/>
          <Route path='/Cart' element={<Main titulo={"Tu carrito"}>
                                              <Cart/>
                                            </Main>}/>
          <Route path='/*' element={<Main titulo={"La página no existe"}>
                                              <PageNotFound/>
                                            </Main>}/> 



          <Route path='/OrderSearch' element={<Main titulo={"Mis Ordenes"}>
                                              <OrderSearch/>
                                            </Main>}/>




        </Routes>
        <Footer/>
      </CardContextProvider>
    </BrowserRouter>
  )
}

export default App