export const getFetch = async ()=>{  
    try{
      const url = 'https://64ee10061f87218271424186.mockapi.io/data'
      const bookJson = await fetch(url)
      const book = await bookJson.json()
      return book
    }
    catch (err) {
      console.log(err);
      throw err
    }
}