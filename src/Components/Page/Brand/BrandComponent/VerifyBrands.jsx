import { LazyLoadImage } from "react-lazy-load-image-component";

import { IoMdStar } from "react-icons/io";
import useStyles from "../../../../Style";
import Axios from "axios";
import React from "react";
import { Link,  } from "react-router-dom"


const VerifyBrands = () => {
    const classes = useStyles()
    const [VerifyArrayData, SetVerifyArrayData] = React.useState([])
    React.useEffect(() => {
       
        Axios.get(
            'https://sweede.app/UserPanel/Get-AllBrand/ ',

        ).then(response => {
            SetVerifyArrayData(response.data)
        }).catch(
            function (error) {

            })
    }, [])
    return (
        <React.Fragment>
            <div className="row">
                {VerifyArrayData?.map((items, index) => {
                    return (
                        <div className="col-xl-6 col-md-12 col-12 verify_brand_container" key={index}>
                            <div className="row verifyBrand_row mx-1 my-3">
                           
                                <Link  to={`/Brand/${items.name.replace(/\s/g, '')}/${items.id}`}> 
                                <div className="col-6  verifyBrand_image_container ">
                                  <LazyLoadImage className="verify_brand_image"  src={`https://sweede.app/${items.Brand_Logo}`}  alt="image not found" />

                                </div>
                                <div className="col-6 verify_content_container">
                                    <div className="row">
                                        <div className="col-12 verify_content_height  ">
                                            <h2 className="ellipsis verify_brands_heading">{items.name}</h2>
                                        </div>
                                        <div className="col-12 verify_content_height verify_subHead">
                                            <p className="ellipsis">{items.num_prod}</p>
                                        </div>
                                        <div className="col-12 verify_ratings verify_content_height">
                                            <span className="verify_rating3"><IoMdStar className={classes.disPen_Icons} /></span><span className="verify_rating1 verify_rating_font">4.5</span><span className="verify_rating_font verify_rating2">Rating</span>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}
export default VerifyBrands