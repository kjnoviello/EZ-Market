import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const CardContext = createContext([])

const CardContextProvider = ({children}) => {

    CardContextProvider.propTypes = {
        children : PropTypes.object.isRequired,
    }

    const [cardList, setCardList] = useState([])

    const addProduct = (newProduct) => {
        setCardList([...cardList, newProduct])
    }

    return (
        <>
            <CardContext.Provider value={{
                cardList,
                addProduct
            }}>
                {children}
            </CardContext.Provider>
        </>
    )
}

export default CardContextProvider