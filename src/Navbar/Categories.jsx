import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import * as bootstrap from 'bootstrap';


function Categories({data}){
    return (
        <div className='categoryOuterDiv '>
            <div className=" ">
                {
                data.map((category, index)=>{
                    if(!category.child_categories.length) return null
                    const categoryTitle = category.name;
                    const categoryExtraInfo = JSON.parse(category.extra_info)
                    const categoryImage = categoryExtraInfo.webLargeImageUrl
                    return (
                    <div className="categoryOuterList " key={index} >
                        <div className='categoryOuterList_menu '>
                            <div className="d-flex justify-content-center">
                                <img src={`${categoryImage}`} className='shadow' height={20} alt="" />
                            </div>
                            <p className='p-0 m-0 text-uppercase s-f-size'>{categoryTitle} <FontAwesomeIcon icon={faCaretDown}/></p>
                        </div>
                        <div className={`position-absolute  categoryListChildren d-none`}>
                            {/* <FontAwesomeIcon className= 'position-absolute text-light fs-2 ' icon={faCaretUp} style={{marginTop: '12px'}} /> */}
                            <div>
                            <div className='categoryOuterDivCaretTop_mini' ></div>
                            {
                                category.child_categories.map((categoryChild, categoryChildIndex) =>{
                                if(!categoryChild.main_categories.length) return null;
                                if(categoryChild.main_categories[0]['main_category_id'] == 0) return null;
                                const categoryChildName = categoryChild.name
                                return (
                                    
                                    <div className=" s-f-size categoryListChildrenList  position-relative" key={categoryChildIndex} >

                                    <div className = 'categoryListChildrenList_menu' >
                                        <a className="" href="#">
                                        {categoryChildName}
                                        <FontAwesomeIcon className='ms-1' icon={faCaretRight} />
                                        </a>
                                    </div>
                                    <div className={`position-absolute d-none`} style={{marginLeft:'100%',zIndex:'999'}}>
                                        {
                                        categoryChild.main_categories.map((categoryChildInnerData,categoryChildInnerDataIndex )=>{
                                            const categoryChildInnerDataTitle = categoryChildInnerData.name;
                                            const categoryID = categoryChildInnerData.main_category_id;
                                            if(categoryID == 0) return null

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
                    </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Categories