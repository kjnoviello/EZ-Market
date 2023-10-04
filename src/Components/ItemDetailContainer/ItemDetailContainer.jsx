import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Fade } from "react-awesome-reveal";
import ItemDetail from "../ItemDetail/ItemDetail"
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading"
import PageNotFound from "../PageNotFound/PageNotFound";

const ItemDetailContainer = () => {
    const [resp, setResp] = useState(null);
    const [loading, setLoading] = useState(true);
    const { pid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!pid) {
            navigate('/PageNotFound');
        } else {
            const db = getFirestore()
            const queryDoc = doc(db, 'products', pid)
            getDoc(queryDoc)
            .then(resp => {
                if (resp.exists()) {
                    setResp({ id: resp.id, ...resp.data() });
                } else {
                    navigate('/PageNotFound');
                }
            })
            .catch(err => {
                console.log("Error en la carga de datos", err);
                navigate('/PageNotFound');
            })
            .finally(() => {
                setLoading(false);
            });
        }
    }, [pid, navigate])

    return (
        <>
            {loading ? (
                <SpinnerLoading />
            ) : resp ? (
                <Fade><ItemDetail titulo={resp.titulo} autor={resp.autor} descripcion={resp.descripcion} stock={resp.stock} categoria={resp.categoria} imagen={resp.imagen} precio={resp.precio} id={resp.id}></ItemDetail></Fade>
            ) : (
                <PageNotFound />
            )}
        </>
    )
}

export default ItemDetailContainer;



