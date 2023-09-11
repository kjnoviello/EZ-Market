import ('../Main/main.css');

const Main = (card) => {
  
  return (
    <main className='main'>
      <div className='mainDiv'>
          <div className='mainDivText'>
              <h3>{card.titulo}</h3>
          </div>
          <div className='mainDivContainer'>
            {card.children}
          </div>
      </div>
    </main>
  )
}

export default Main