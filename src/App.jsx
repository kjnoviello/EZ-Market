import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardContextProvider  from './context/CartContext';
import NavScroll from './Components/NavScroll/NavScroll';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import QuienesSomos from './Components/QuienesSomos/QuienesSomos';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Contact from './Components/Contact/Contact';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cart from './Components/Cart/Cart';

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
          <Route path='/Productos' element={  <Main titulo={"Todos"}>
                                                <ItemListContainer/>
                                              </Main>}/>
          <Route path='/Categoria/:cid' element={ <Main titulo={"Libros"}>
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
        </Routes>
        <Footer/>
      </CardContextProvider>
    </BrowserRouter>
  )
}

export default App







// import { CardContext } from './context/CartContext';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NavScroll from './Components/NavScroll/NavScroll';
// import Footer from './Components/Footer/Footer';
// import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
// import QuienesSomos from './Components/QuienesSomos/QuienesSomos';
// import Contact from './Components/Contact/Contact';
// import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
// import Main from './Components/Main/Main';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'

// function App() {

//   return (
//     <BrowserRouter>
//       <CardContext.Provider value={{}}>
//         <NavScroll />
//         <Routes>
//           <Route path='/' element={ <>
//                                       <QuienesSomos titulo={"¡Bienvenidos a EZ Market!"}/>
//                                       <Main titulo={"Nuestro catálogo"}>
//                                         <ItemListContainer/>
//                                       </Main>
//                                     </>}/>
//           <Route path='/QuienesSomos' element={<QuienesSomos titulo={"Acerca de nosotros..."} />}/> 
//           <Route path='/Productos' element={  <Main titulo={"Todos"}>
//                                                 <ItemListContainer/>
//                                               </Main>}/>
//           <Route path='/Productos/:cid' element={ <Main titulo={"Libros"}>
//                                                     <ItemListContainer/>
//                                                   </Main>}/>
//           <Route path='/Detalle/:pid' element={ <Main titulo={"Detalles del libro"}>
//                                                   <ItemDetailContainer/>
//                                                 </Main>}/>
//           <Route path='/Contacto' element={ <Main titulo={"Contacto"}>
//                                               <Contact/>
//                                             </Main>}/>                                      
//         </Routes>
//         <Footer/>
//       </CardContext.Provider>
//     </BrowserRouter>
//   )
// }

// export default App