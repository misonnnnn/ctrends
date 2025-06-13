import Icons from '../assets/icons/Icon.jsx'
import {  useEffect, useState, useRef } from 'react';
import * as bootstrap from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Categories from './Categories.jsx';
//category id:bb2385ab-3f26-48cd-80f3-e7414bfb112

//api keys 
//1a9d591a7amsh23c7fe97daf47d6p143dc3jsn594f31ebec65
//fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1
function Navbar() {
  const {SearchIcon, CartIcon, UserIcon} = Icons;
  const [menCategoryList, setMenCategoryList] = useState([]);
  const [womenCategoryList, setWomenCategoryList] = useState([]);
  const [activeNavForMen, setActiveNavForMen] = useState(false);
  const [activeNavForWomen, setActiveNavForWomen] = useState(false);
  const navMenuRefForMen = useRef(null)
  const navMenuRefForWomen = useRef(null)
  const [navMenuPositionFromLeft, setNavMenuPositionFromLeft] = useState(0)
  const [isNavigationLoaded, setIsNavigationLoaded] = useState(false)

  const toggleMainCategoryVisibility = (index) => {
    setmainCategoryIndex(prev => prev === index ? null : index); 
    setcategoryChildElementIndex(null)
  };
  const toggleCategoryChildVisibility = (categoryChildIndex) => {
    setcategoryChildElementIndex(prev => prev === categoryChildIndex ? null : categoryChildIndex); 
  };

  useEffect(() => {
    let ref = null;

    if (activeNavForMen) {
      ref = navMenuRefForMen;
    } else if (activeNavForWomen) {
      ref = navMenuRefForWomen;
    }

    if (ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      setNavMenuPositionFromLeft(rect.left);
    }
  }, [activeNavForMen, activeNavForWomen]);

  const toggleMenWomenCategory = (section) =>{
    if(section == 'men'){
      setActiveNavForMen(prev => !prev);
      setActiveNavForWomen(false);
    }else{
      setActiveNavForWomen(prev => !prev);
      setActiveNavForMen(false); 
    }
  } 

  useEffect(()=>{
    fetch('https://lightsalmon-otter-774319.hostingersite.com/asos/v1/categories',{
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json', 
        // 'X-RapidAPI-Key': 'fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1' 
      }
      })
      .then(res => res.json())
      .then(data => {
        setIsNavigationLoaded(true)
        const menCategoryData = data['data'][0]['sub_categories'];
        const womenCategoryData = data['data'][1]['sub_categories'];
        setMenCategoryList(menCategoryData)
        setWomenCategoryList(womenCategoryData)
      })
      .catch(err => {
          console.error(err);
      })
  },[])




  return (
      <div className="w-100 shadow-sm d-flex justify-content-between align-items-center bg-light sticky-top customNav">
        <div className='d-flex justify-content align-items-center position-relative'>
          <h3 className='m-0' style={{fontFamily: 'VeganStyle'}}>E-shop</h3>
          <div className='position-relative d-flex h-100  top-0' style={{marginLeft:'50px'}}>
            <div className='navMenu navMenu_men' onClick={()=> toggleMenWomenCategory('men')}>
              <span className='px-2 py-5' ref={navMenuRefForMen}>MEN</span>
            </div>
            <div className='navMenu navMenu_women' onClick={()=> toggleMenWomenCategory('women')}>
              <span className='px-2 py-5' ref={navMenuRefForWomen}>WOMEN</span>
            </div>
          </div>
        </div>
        
        
        <div className="d-flex justify-content-around align-items-center">
          <div className='me-2'>
            <p className='p-0 m-0'>
               <img src={SearchIcon} alt="" height={20}/> 
            </p>
          </div>
          <div className='me-2'>
            <p className='p-0 m-0'>
               <img src={CartIcon} alt="" height={20}/> 
            </p>
          </div>
          <div className='me-2'>
            <p className='p-0 m-0'>
              <img src={UserIcon} alt="" height={20}/>
              Login
            </p>
          </div>
        </div>

        <div className={`position-absolute  start-50 translate-middle-x top-0  ${activeNavForMen ? "d-block" : "d-none"}`} style={{zIndex: '99', marginTop:'73px', width :'90%'}}>
          <div className='categoryOuterDivCaretTop' style={{left : `${navMenuPositionFromLeft}px`,marginLeft:'-5%'}}></div>

          {
            isNavigationLoaded ? <Categories data={menCategoryList}/> :
              (
              <div className="d-flex justify-content-center align-items-center bg-light p-2 shadow" style={{ }}>
                  <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                  </div>
              </div>
              )
          }

        </div>

        <div className={`position-absolute  start-50 translate-middle-x top-0   ${activeNavForWomen ? "d-block" : "d-none"}`} style={{zIndex: '99', marginTop:'73px', width :'90%'}}>
          <div className='categoryOuterDivCaretTop' style={{left : `${navMenuPositionFromLeft}px`,marginLeft:'-5%'}}></div>
          {
            isNavigationLoaded ? <Categories data={womenCategoryList}/> :
              (
              <div className="d-flex justify-content-center align-items-center bg-light p-2 shadow" style={{ }}>
                  <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                  </div>
              </div>
              )
          }
        </div>
        
      </div>
  );
}

export default Navbar;
