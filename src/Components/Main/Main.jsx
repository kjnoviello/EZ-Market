import { AttentionSeeker } from 'react-awesome-reveal';
import { useParams } from 'react-router-dom';

import ('./Main.css');

const Main = (card) => {

  const { cid } = useParams()
  
  let title
  if (cid === "Novela") {
    title=  card.novela
  } else if(cid === "novedad") {
    title=  card.novedades
  } else if(cid === "Clasicos") {
    title=  card.clasicos
  } else {
    title=  card.titulo
  }
  
  return (
    <main className='main'>
      <div className='mainDiv'>
          <div className='mainDivText'>
              <AttentionSeeker triggerOnce="false" effect="pulse"><h1> {title}</h1></AttentionSeeker>
          </div>
          <div className='mainDivContainer'>
            {card.children}
          </div>
      </div>
    </main>
  )
}

export default Main