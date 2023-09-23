import { Fade } from 'react-awesome-reveal'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import '../QuienesSomos/QuienesSomos.css'

const QuienesSomos = (datos) => {
  return (
    <div>
      <Fade cascade triggerOnce={true}>
        <h1 className='title'>{datos.titulo}</h1>
        <CarouselSlider/>
        <br />
          <p className='subtitle'>
            Explora el emocionante mundo de la literatura en un solo lugar. En EZ Market, no solo te ofrecemos una amplia selección de libros cautivadores, sino también la posibilidad de adquirirlos desde tu casa y disfrutarlos en tus momentos de lectura.

            Nuestra colección abarca desde los éxitos más recientes hasta los clásicos atemporales, pasando por géneros que van desde la fantasía épica hasta la no ficción inspiradora. Cada título es cuidadosamente elegido para brindarte experiencias literarias inolvidables.

            Desde el momento en que entras en EZ Market, te sumergirás en una experiencia moderna y conveniente para comprar libros. Lleva tus lecturas a donde quieras y disfruta de momentos de inspiración y entretenimiento.

            Bienvenidos a EZ Market, donde las páginas llenas de historias te esperan y donde comprar libros se convierte en una experiencia gratificante. ¡Explora, agrega al carrito y comienza tu viaje literario hoy mismo!
          </p>
      </Fade>
    </div>
  )
}

export default QuienesSomos