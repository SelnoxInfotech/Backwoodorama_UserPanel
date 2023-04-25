import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import { TbCircleFilled } from "react-icons/tb"
const NewFlavour = () => {
    return (
        <>
            <div className="row center newFlavour_row">
                <div className="col-sm-10 col-12 newFlavour_container">
                    <div className="row">
                        <div className="col-lg-2  col-4 newFlavour_image_container_height">
                            <div className='newFlavourimage_div'>
                                <LazyLoadImage className='newFlavour_image' src="/image/logo2.png" alt='not available' height={"100px"} />

                            </div>

                        </div>
                        <div className="col-lg-10  col-8  newFlavourContent_height">
                            <div className='row'>
                                <div className='col-12'>
                                    <p>Urban Flavours Delivery - Berkeley</p>
                                </div>
                                <div className='col-12'>
                                    <ol className='newFlavour_ol'>
                                        <li>
                                            <div className=' d-flex'>
                                                <p><IoLocationSharp /></p><p className='newFlavour_margin_inline'>Berkeley, California</p>
                                            </div>
                                        </li>
                                    </ol>

                                </div>
                                <div className='col-12 new_flavourList_container'>
                                    <ol className='newFlavour_ol'>
                                        <li>
                                            <div className='d-flex'>
                                                <p>4.5</p>
                                                <span className='newFlavour_margin_inline'><AiFillStar /></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex'>
                                                <p><TbCircleFilled /></p>
                                                <p className='newFlavour_margin_inline'>Store details</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex'>
                                                <p><TbCircleFilled /></p>
                                                <p className='newFlavour_margin_inline'>closed</p>
                                            </div>
                                        </li>
                                    </ol>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default NewFlavour