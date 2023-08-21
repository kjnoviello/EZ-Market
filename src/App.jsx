import NavScrollExample from './Components/Navbar/Navbar';
import CarouselSlider from './Components/Slider/Slider';
// import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Hr from './Components/Hr/Hr';
import Footer from './Components/Footer/Footer';
import Mark from './Components/Mark/Mark';
// import data from './Components/data.json';
import './Components/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <NavScrollExample></NavScrollExample>
      <Hr></Hr>
      <CarouselSlider></CarouselSlider>
      <Hr></Hr>
      <main className='mainDiv'>
        <Mark></Mark>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
