import Icons from '../assets/icons/Icon.jsx'
import {  useEffect, useState, useRef } from 'react';
import * as bootstrap from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
//category id:bb2385ab-3f26-48cd-80f3-e7414bfb112

//api keys 
//1a9d591a7amsh23c7fe97daf47d6p143dc3jsn594f31ebec65
//fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1
function Navbar() {
  const {SearchIcon, CartIcon, UserIcon} = Icons;
  const [menCategoryList, setMenCategoryList] = useState([]);
  const [womenCategoryList, setWomenCategoryList] = useState([]);
  const [mainCategoryIndex, setmainCategoryIndex] = useState(null)
  const [categoryChildElementIndex, setcategoryChildElementIndex] = useState(null)
  const [activeNavForMen, setActiveNavForMen] = useState(false);
  const [activeNavForWomen, setActiveNavForWomen] = useState(false);
  const navMenuRefForMen = useRef(null)
  const navMenuRefForWomen = useRef(null)
  const [navMenuPositionFromLeft, setNavMenuPositionFromLeft] = useState(0)

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

  const menCategoryId = 4;
  const womenCategoryId = 4;
  useEffect(()=>{
    fetch('https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
        'X-RapidAPI-Key': 'fab9b4800dmsh6d3b5c77232eab3p130ec1jsn734ff01d57d1' 
      }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const menCategoryData = data.navigation[0].children[menCategoryId].children;
        const womenCategoryData = data.navigation[1].children[womenCategoryId].children;
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
          <div className='position-relative d-flex h-100  top-0' style={{marginLeft:'100px'}}>
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

        <div className={`position-absolute  start-0 top-0  ${activeNavForMen ? "d-block" : "d-none"}`} style={{zIndex: '99', marginTop:'73px', width :'90%'}}>
          <div className='categoryOuterDivCaretTop' style={{left : `${navMenuPositionFromLeft}px`}}></div>
          <div className='categoryOuterDiv '>
            <div className="d-flex">
              {

                menCategoryList.map((category, index)=>{
                  const categoryTitle = category.content.title;
                  const categoryImage = category.content.webLargeImageUrl
                  return (
                    <div className="categoryOuterList " key={index} >
                        <div className='categoryOuterList_1' onClick={()=>(toggleMainCategoryVisibility(index))}>
                          <div className="d-flex justify-content-center">
                            <img src={`${categoryImage}`} className='shadow' height={20} alt="" />
                          </div>
                          <p className='p-0 m-0 text-uppercase s-f-size'>{categoryTitle} <FontAwesomeIcon icon={faCaretDown}/></p>
                        </div>
                        <div className={`position-absolute  categoryListChildren ${mainCategoryIndex === index ? '' : 'd-none'}`}>
                          {
                            category.children.map((categoryChild, categoryChildIndex) =>{
                              if(!categoryChild.children.length) return null;
                              const categoryChildName = categoryChild.content.title
                              return (
                                <div className=" s-f-size   position-relative" key={categoryChildIndex} >
                                  <div className = 'categoryListChildrenList' onClick={()=>toggleCategoryChildVisibility(categoryChildIndex)}>
                                    <a className="" href="#">
                                      {categoryChildName}
                                      <FontAwesomeIcon className='ms-1' icon={faCaretRight} />
                                    </a>
                                  </div>
                                  <div className={`position-absolute ${categoryChildIndex === categoryChildElementIndex ? '' : 'd-none'}`} style={{marginLeft:'120px',zIndex:'999'}}>
                                    {
                                      categoryChild.children.map((categoryChildInnerData,categoryChildInnerDataIndex )=>{
                                        const categoryChildInnerDataTitle = categoryChildInnerData.content.title;
                                        const categoryID = categoryChildInnerData.link.categoryId;

                                        return (
                                          <div key={categoryChildInnerDataIndex} className='border-bottom border-light border-2 position-relative ' style={{width:'150px'}}>
                                            <div className='primary_background px-2 py-2'>
                                              
                                              <Link className="text-light " to={`/products/${categoryID}`}>
                                                {categoryChildInnerDataTitle} - {categoryID}
                                              </Link>
                                            </div>
                                          </div>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className={`position-absolute  start-0 top-0 ${activeNavForWomen ? "d-block" : "d-none"}`} style={{zIndex: '99', marginTop:'73px', width :'90%'}}>
          <div className='categoryOuterDivCaretTop' style={{left : `${navMenuPositionFromLeft}px`}}></div>
          <div className='categoryOuterDiv'>
            <div className="d-flex">
              {

                womenCategoryList.map((category, index)=>{
                  const categoryTitle = category.content.title;
                  const categoryImage = category.content.webLargeImageUrl
                  return (
                    <div className="categoryOuterList " key={index} >
                        <div className='categoryOuterList_1' onClick={()=>(toggleMainCategoryVisibility(index))}>
                          <div className="d-flex justify-content-center">
                            <img src={`${categoryImage}`} className='shadow' height={20} alt="" />
                          </div>
                          <p className='p-0 m-0 text-uppercase s-f-size'>{categoryTitle} <FontAwesomeIcon icon={faCaretDown}/></p>
                        </div>
                        <div className={`position-absolute  categoryListChildren ${mainCategoryIndex === index ? '' : 'd-none'}`}>
                          {
                            category.children.map((categoryChild, categoryChildIndex) =>{
                              if(!categoryChild.children.length) return null;
                              const categoryChildName = categoryChild.content.title
                              return (
                                <div className=" s-f-size   position-relative" key={categoryChildIndex} >
                                  <div className = 'categoryListChildrenList' onClick={()=>toggleCategoryChildVisibility(categoryChildIndex)}>
                                    <a className="" href="#">
                                      {categoryChildName}
                                      <FontAwesomeIcon className='ms-1' icon={faCaretRight} />
                                    </a>
                                  </div>
                                  <div className={`position-absolute ${categoryChildIndex === categoryChildElementIndex ? '' : 'd-none'}`} style={{marginLeft:'120px',zIndex:'999'}}>
                                    {
                                      categoryChild.children.map((categoryChildInnerData,categoryChildInnerDataIndex )=>{
                                        const categoryChildInnerDataTitle = categoryChildInnerData.content.title;
                                        const categoryID = categoryChildInnerData.link.categoryId;

                                        return (
                                          <div key={categoryChildInnerDataIndex} className='border-bottom border-light border-2 position-relative ' style={{width:'150px'}}>
                                            <div className='primary_background px-2 py-2'>
                                              
                                              <Link className="text-light " to={`/products/${categoryID}`}>
                                                {categoryChildInnerDataTitle} - {categoryID}
                                              </Link>
                                            </div>
                                          </div>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
