import { AttentionSeeker } from 'react-awesome-reveal';

import ('../Main/main.css');

const Main = (card) => {
  
  return (
    <main className='main'>
      <div className='mainDiv'>
          <div className='mainDivText'>
              <AttentionSeeker triggerOnce="false" effect="pulse"><h3>{card.titulo}</h3></AttentionSeeker>
          </div>
          <div className='mainDivContainer'>
            {card.children}
          </div>
      </div>
    </main>
  )
}

export default Main