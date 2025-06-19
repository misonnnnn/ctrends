import bannerImage1 from '../assets/sample-banner.jpg'
import bannerImage2 from '../assets/sample-banner2.jpg'
import '../banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import Icons from '../assets/icons/Icon.jsx'
const {ShopTag, ShopBag} = Icons;


function Banner() {
  return (
    <>
      <div className="container-fluid m-0 p-0 position-absolute d-none d-md-block d-xs-block" >
        <div className="w-100 position-relative d-flex justify-content-end">
          <img src={bannerImage2} alt="" className='w-75 bannerImage' />
        </div>
      </div> 

      <div className="container-fluid m-0 p-0 position-relative d-block d-md-none" >
        <div className="w-100 position-relative d-flex justify-content-center">
          <img src={bannerImage1} alt="" className='w-100 bannerImage' />
        </div>
      </div>  

      <div className="container p-0 position-relative mt-0 mt-md-5 brandsOuterDiv" style={{height:'400px'}} >
        <div className='row w-100 m-0'>
          <div className='col-lg-9 col-md-12 col-sm-12 col-12 mx-auto'>
              <div className='mt-5 w-100 position-relative' > 
                <div className='w-100 d-flex justify-content-center justify-content-md-start'>
                  <div className=''>
                    <i className='position-relative m-0 font-style-italic'>Discover What’s Trending – <span className='fw-bold fs-2' style={{color: '#b17659'}}>Shop the Look <FontAwesomeIcon icon={faTag} /></span></i>

                    <p className='text-muted p-0 m-0'>Explore our latest collection of fashion and accessories that are making waves this season.</p>
                    <div className='d-flex justify-content-center'>
                      <div className='shopNowButton d-none'>
                        <span>View collection 
                          <img src={ShopBag} height={20} alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div> 
    </>

    
  );
}

export default Banner;
