import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CardContext = createContext([]);

const CardContextProvider = ({ children }) => {
    CardContextProvider.propTypes = {
        children: PropTypes.object.isRequired,
    };

    const [cardList, setCardList] = useState([]);

    //* funcion para agregar productos a cardList
    const addProduct = (newProduct) => {

        // Buscar si el producto ya existe en cardList
        const existingProductIndex = cardList.findIndex(
        (product) => product.id === newProduct.id
        );

        if (existingProductIndex !== -1) {
            // Si el producto ya existe, actualiza la cantidad
            const updatedCardList = [...cardList];
            updatedCardList[existingProductIndex].count += newProduct.count;
            setCardList(updatedCardList);
        } else {
            // Si el producto no existe, se agrega a cardList
            setCardList([...cardList, newProduct]);
        }
    };

    //* Eliminar producto
    const deleteProduct = (id) => setCardList(cardList.filter(prod => prod.id !==  id ))

    //* Sumar todas las unidades
    const totalCount = () => {
        return cardList.reduce((total, product) => total + product.count, 0);
    };
    
    //* Sumar todos los precios
    const totalPrice = () => {
        return cardList.reduce(
        (totalPrice, product) => totalPrice + product.precio * product.count,
        0
        );
    };

    return (
        <CardContext.Provider value={{
            cardList,
            addProduct, 
            deleteProduct,
            totalCount,
            totalPrice
        }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;