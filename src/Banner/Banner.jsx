import bannerImage from '../assets/sample-banner.jpg'
import '../banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import Icons from '../assets/icons/Icon.jsx'
const {ShopTag, ShopBag} = Icons;


function Banner() {
  return (
    <div className="container-fluid m-0 p-0 d-flex justify-content-end" style={{height:'500px'}}>
        <div className=' start-0 translate-middle-x  position-absolute' style={{zIndex: '99',marginLeft: '200px', top:'40%'}}> 
          <div className='w-100 d-flex justify-content-center align-items-center'>
            <p className='position-relative ms-5'>Discover What’s Trending – <br /><span className='fw-bold fs-2' style={{color: '#b17659'}}>Shop the Look. <FontAwesomeIcon icon={faTag} /></span></p>
          </div>
          <div className='w-100 d-flex justify-content-center'>
            <div className='shopNowButton'>
              <span>View collection 
                <img src={ShopBag} height={20} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="d-none d-md-block position-relative d-inline-block">
          <img src={bannerImage} alt="" className='h-100' />
          <div className="gradient-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>
    </div>  
  );
}

export default Banner;
