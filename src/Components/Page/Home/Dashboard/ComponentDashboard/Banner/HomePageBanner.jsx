const HomePageBanner = () => {
    const BannerArray=[{image_url:"./image/banner1.jpg"}]
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                     {BannerArray.map((ele,index)=>{
                        return(
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 HomePageBanner_height ">
                            

                            </div>
                        )
                     })}
 

                </div>

            </div>
        </>
    )
}
export default HomePageBanner