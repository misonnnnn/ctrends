import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
      <div className="w-100 shadow-sm d-flex justify-content-between align-items-center p-3 bg-light sticky-top">
        <h3 style={{fontFamily: 'VeganStyle'}}>E-shop</h3>
        <div className="d-none d-md-flex rounded-circle d-flex 
                    justify-content-center align-items-center 
                    position-absolute  top-50 start-50 translate-middle bg-light mt-3" style={{height:'80px',width:'80px',fontFamily: 'VeganStyle'}}>
          Logo
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div className="rounded-1 border border-2 border-1 overflow-hidden me-2">
            <input type="search" className="bg-light border-0 px-2 py-1 text-dark outline-none" placeholder="search..." style={{outline: 'none'}} />
          </div>
          <div className='me-2'>
            <p className='p-0 m-0'><FontAwesomeIcon icon={faCartShopping} /> Cart</p>
          </div>
          <div className='me-2'>
            <p className='p-0 m-0'>Login</p>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
