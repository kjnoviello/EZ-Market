import { createContext, useState } from "react";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch} from "firebase/firestore"
import PropTypes from 'prop-types';

export const CardContext = createContext([]);

const CardContextProvider = ({ children }) => {
    CardContextProvider.propTypes = {
        children: PropTypes.object.isRequired,
    };

    const [dataForm, setDataform] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [id, setId] = useState('') 
    const [cardList, setCardList] = useState([]);

    
    //* funcion para agregar productos a cardList
    const addProduct = (newProduct) => {
        
        // Buscar si el producto ya existe en cardList
        const existingProductIndex = cardList.findIndex( (product) => product.id === newProduct.id );
        
        if (existingProductIndex !== -1) {
            
            // Si el producto ya existe, actualiza la cantidad
            const updatedCardList = [...cardList];
            
            // obtengo la diferencia entre lo que se acumula y el stock
            const result = updatedCardList[existingProductIndex].stock - updatedCardList[existingProductIndex].count

            // verifico que no se pueda agregar más unidades de las que hay es stock
            newProduct.count <= result ? (updatedCardList[existingProductIndex].count += newProduct.count)  : alert(`No hay suficiente stock, quedan ${result} unidades de este producto`)
            setCardList(updatedCardList)
   
//! guardado de items en localstorage -------------------------------------------------------

            const updatedCardListJSON = JSON.stringify(updatedCardList);
            const updatedsavedList = localStorage.setItem("updatedCardList", updatedCardListJSON);
            console.log(updatedsavedList);

//! fin guardado de items en localstorage-----------------------------------------------------


        } else {

            // Si el producto no existe, se agrega a cardList
            setCardList([...cardList, newProduct]);

//! guardado de items en localstorage-----------------------------------------------------------

            const cardListJSON = JSON.stringify(cardList);
            const savedList = localStorage.setItem("cardList", cardListJSON);
            console.log(savedList);

//! fin guardado de items en localstorage -----------------------------------------------------------

        }
    };

    //* Eliminar producto
    const deleteProduct = (id) => setCardList(cardList.filter(prod => prod.id !==  id ))

    //* Sumar todas las unidades
    const totalCount = () => {
        return cardList.reduce( (total, product) => total + product.count, 0); 
    };
    
    //* Sumar todos los precios
    const totalPrice = () => {
        return cardList.reduce( (totalPrice, product) => totalPrice + product.precio * product.count, 0 );
    };

    // vaciar carrito
    const clearCart = () => {
        setCardList([])
        setId('')
    }

    // funcion generadora de orden
    const order = {}
    const queryDB = getFirestore()
    const handleOrders = () => {

        /* The code is creating an order object with the buyer information, items in the cart, and the
        total price. */
        order.buyer = dataForm
        order.items = cardList.map(prod => ({id: prod.id, titulo: prod.titulo, cantidad: prod.count, precio: prod.precio}))
        order.total = totalPrice()
        order.date = Date()
        console.log('esta es la orden que genera', order)

        
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
        .then(({id}) => {setId(id)
            console.log(id)})
        .catch(err => console.log(err))
        .finally(()=>{})
    } 


    const handleOnChange = (evt) => {
        setDataform({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
        console.log(dataForm)
    }




    // funcion para actualizar un producto --- ID ESTA HARDCODEADO!!!!!!! SE DEBE HACER DINAMICO
    const handleUpdateProduct = () => {
        const queryUpdateProduct = doc(queryDB, 'products', '0kzlMjXu0vRiAA9CZwWz')
        updateDoc(queryUpdateProduct, {
            stock: 100
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=> console.log('Producto actualizado correctamente'))
    }

    // funcion para actualizar en lotes
    const handleUpdateBatchProduct = () => {
        //* estos dos queryUpdateProduct y batch update se puede reemplazar por un map o foreach para ahcerlo dinamico donde el batch.commit() queda afuera, por ejemplo.
        const queryUpdateProduct1 = doc(queryDB, 'products', '0kzlMjXu0vRiAA9CZwWz')
        const queryUpdateProduct2 = doc(queryDB, 'products', '4zE5CYeoyjMdCZABKLjY') 

        const batch = writeBatch(queryDB)
        batch.update(queryUpdateProduct1, { stock: 50 })
        batch.update(queryUpdateProduct2, { stock: 50 })
        batch.commit()
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => console.log('Productos actualizados en masa correctamente'))
    }

    return (
        <CardContext.Provider value={{
            cardList,
            addProduct, 
            deleteProduct,
            totalCount,
            totalPrice,
            clearCart,
            handleOrders,
            handleUpdateProduct,
            handleUpdateBatchProduct,
            handleOnChange,
            dataForm,
            id
        }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;
