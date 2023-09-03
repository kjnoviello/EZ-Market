import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoading() {
  return <div>
            <Spinner animation="border" variant="success" size="lg" />
            <p>Loading...</p>
         </div>

}

export default SpinnerLoading;