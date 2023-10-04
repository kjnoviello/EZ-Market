import { createContext, useState } from "react";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

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

        const existingProductIndex = cardList.findIndex( (product) => product.id === newProduct.id );

        if (existingProductIndex !== -1) {

            const updatedCardList = [...cardList];
            Swal.fire({
                icon: "success",
                text: `Agregaste ${newProduct.count}u.  al carrito.`,
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              })

            const result = updatedCardList[existingProductIndex].stock - updatedCardList[existingProductIndex].count

            newProduct.count <= result ? (updatedCardList[existingProductIndex].count += newProduct.count)  :
            Swal.fire({
                icon: "error",
                text: `No hay suficiente stock, quedan ${result} unidades de este producto.`,
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              })
            setCardList(updatedCardList)
            console.log("esto es updatedCardList", updatedCardList);
            return updatedCardList

        } else {
            Swal.fire({
                icon: "success",
                text: `Agregaste ${newProduct.count}u.  al carrito.`,
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              })
            setCardList([...cardList, newProduct]);
            return cardList
        }
    };

    // Eliminar producto
    const deleteProduct = (id) => setCardList(cardList.filter(prod => prod.id !==  id ))

    // Sumar todas las unidades
    const totalCount = () => {
        return cardList.reduce( (total, product) => total + product.count, 0);
    };

    // Sumar todos los precios
    const totalPrice = () => {
        return cardList.reduce( (totalPrice, product) => totalPrice + product.precio * product.count, 0 );
    };

    // vaciar carrito
    const clearCart = () => {
        setCardList([])
        setId('')
        setDataform({
            name: '',
            phone: '',
            email: ''
        })
    }

    // funcion generadora de orden
    const order = {}
    const queryDB = getFirestore()
    const handleOrders = () => {

        order.buyer = dataForm
        order.items = cardList.map(prod => ({id: prod.id, titulo: prod.titulo, cantidad: prod.count, precio: prod.precio}))
        order.total = totalPrice()
        order.date = Date()
        console.log('esta es la orden que genera', order)

        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
        .then(({ id }) => {
            setId(id);

            cardList.forEach((product) => {
            const queryUpdateProduct = doc(queryDB, 'products', product.id);
            const newStock = product.stock - product.count;

            updateDoc(queryUpdateProduct, { stock: newStock })
                .then(() => {
                })
                .catch((error) => {
                console.error('Error al actualizar el stock en Firebase:', error);
                });
            });
        })
        .catch((err) => console.error(err))
        .finally(() => {});
    }

    const handleOnChange = (evt) => {
        setDataform({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
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
            handleOnChange,
            dataForm,
            id,
        }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;