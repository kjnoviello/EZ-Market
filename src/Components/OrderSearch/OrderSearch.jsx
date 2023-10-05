import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ('./OrderSearch.css')

const OrderSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchInput.trim() === '') {
            return ;
        }

        const fetchOrder = async () => {
            const db = getFirestore();
            const queryDoc = doc(db, 'orders', searchInput);
            
            try {
                const resp = await getDoc(queryDoc);
                if (resp.exists()) {
                    setOrder({ id: resp.id, ...resp.data()});
                } else {
                    setError('Ingrese una órden válida');
                }
            } catch (err) {
                console.error("Error en la carga de datos", err);
                setError('Error al buscar el orden');
            }
        };
        fetchOrder();
    }, [searchInput]);

    return (
        <div className="container-lg row bg-white divContact">
            <h2 id='searchOrder'>Busqueda de órdenes</h2>
            <p><i> Ingrese el numero de orden obtenido al final de la compra para obtener el detalle.</i></p>
            <input
                id='inputOrder'
                placeholder="ID del Orden"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <br />
            {order && (
                searchInput == order.id ?
                <div >
                    <br />
                    <h3>Detalles del Pedido</h3>
                    <p><strong>ID del orden: </strong>{order.id}</p>
                    <p><strong>Fecha: </strong>{order.date}</p>
                    <p><strong>Total: </strong>${order.total.toFixed(2)}</p>
                    <br />
                    <h3 >Descripcion del Pedido</h3  >
                    {order.items.map((ord, index) => (
                        <p key={index}>{ord.titulo}, {ord.cantidad}u. ${ord.precio.toFixed(2)} c/u</p>
                    ))}
                </div>
                :
                <>{error && <p>{error}</p>}</>
            )}
        </div>
    );
}

export default OrderSearch;