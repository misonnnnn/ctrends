
import * as bootstrap from 'bootstrap';

function LoadingDiv(){
    return (
        <div className="d-flex justify-content-center align-items-center bg-light p-2 shadow" style={{ }}>
            <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingDiv