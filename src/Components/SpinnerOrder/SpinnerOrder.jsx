import { RotatingLines } from  'react-loader-spinner'
import('./SpinnerOrder.css')

const SpinnerOrder = () => {
    return (
        <div className='spinnerOrderDiv'>
            <h1>Procesando compra...</h1>
            <div>
                <RotatingLines
                    strokeColor="#157347"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
        </div>
    )
}

export default SpinnerOrder

