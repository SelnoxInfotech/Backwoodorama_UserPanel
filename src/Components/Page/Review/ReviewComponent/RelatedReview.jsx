import { LazyLoadImage } from 'react-lazy-load-image-component';

const RelatedReview = () => {
    const RelatedReview = [
        {
            imgs: "/image/flower.png", head: "Mr Nice guys", r_date: "2 year ago", rate: "4.3",
            review: "Good peeps. Happy vibes. Smart pharmacists. My crew!",
            footer_h1:"Help",footer_h2:"Report"
        },
        {
            imgs: "/image/glass.png", head: "Mr Nice guys", r_date: "2 year ago", rate: "4.3",
            review: "Good peeps. Happy vibes. Smart pharmacists. My crew!",
            footer_h1:"Help",footer_h2:"Report"
        }]
    return (
        <>
            <div className="row center">
                    {RelatedReview.map((ele, index) => {
                        return (
                                <div className=" col-sm-8 col-10 border related_review_container mt-4" key={index}>
                                    <div className="row">
                                        <div className="col-4 related_img_container">
                                            <div className="row">
                                                <div className="col-12 related_review_image">
                                                    <LazyLoadImage className='realted_review_images' src={ele.imgs} />

                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-8 related_review_content">
                                            <div className="row">
                                                <div className="col-12 RelatedReview_TextCol_height">
                                                    <p>{ele.head}</p>

                                                </div>
                                                <div className='col-12 RelatedReview_TextCol_height'>
                                                    <p>{ele.r_date}</p>
                                                </div>
                                                <div className='col-12 RelatedReview_TextCol_height'>
                                                    <p>{ele.rate}</p>
                                                </div>
                                                <div className='col-12 RelatedReview_TextCol_height'>
                                                    {ele.review}
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className='row border'>
                                        <div className='offset-sm-4 col-sm-8 offset-4 col-10 related_review_footer'>
                                            <div className='row'>
                                                <div className='col-3 col-sm-3 col-lg-2 my-1'>
                                            <p>{ele.footer_h1}</p>

                                                </div>
                                                <div className='col-3 col-sm-3 col-lg-2 my-1'>
                                                    <p>{ele.footer_h2}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                        )
                    })}


            </div>
        </>
    )
}
export default RelatedReview