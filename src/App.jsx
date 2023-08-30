import NavScrollExample from './Components/Navbar/Navbar';
import Hr from './Components/Hr/Hr';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import QuienesSomos from './Components/QuienesSomos/QuienesSomos';
import Cardwidget from './Components/CardWidget/Cardwidget';
import './Components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <NavScrollExample card={Cardwidget}></NavScrollExample>
      <Hr></Hr>
      <QuienesSomos></QuienesSomos>
      <Hr></Hr>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
