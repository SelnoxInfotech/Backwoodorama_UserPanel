import {IoMdStar} from "react-icons/io"
const DispensoriesOpenResult = () => {
    const DispensoriesArray = [{ img_url: "./image/logo2.png", head: "Canna Cabana", subHead: "Recreational" }, { img_url: "./image/logo.webp", head: "Canna Cabana", subHead: "Recreational" }]
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 dispensories_main_container  ">

                        {DispensoriesArray.map((ele, index) => {
                            return (
                                <div className="row p-2">
                                    <div className="col-lg-12  col-md-12 col-sm-12 col-12 despensories_card_container">
                                        <div className="row">
                                            <div className="col-4 disensories_card_image_div">
                                                <img className="dispensories_card_image" src={ele.img_url} alt="image not available" width={"100%"} height={"100px"} />

                                            </div>
                                            <div className="col-8 dispenosries_card_content_div">
                                                <div className="row">
                                                    <div className="col-12 dispensories_content_paragraphs">
                                                        <p>{ele.head}</p>

                                                    </div>
                                                    <div className="col-12">
                                                        <p>{ele.subHead}</p>
                                                    </div>
                                                    <div className="col-12 dispensories_buttonsContainer">
                                                        <button className="dispensories_open_res_btns">Closed</button>
                                                        <button className="dispensories_open_res_btns">Order Online</button>

                                                    </div>
                                                    <div className="col-12">
                                                        <button className="dispensories_pickup_btn">Pickup delivery</button>
                                                    </div>
                                                    <div className="col-12 d-flex">
                                                        <p>Rating</p><span className="dis_open_result_star"><IoMdStar/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}
export default DispensoriesOpenResult