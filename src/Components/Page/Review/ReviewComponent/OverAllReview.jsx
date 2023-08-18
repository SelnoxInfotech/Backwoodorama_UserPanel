import ProgressBar from "./ProgressBar"
import { AiFillStar } from "react-icons/ai"
import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useStyles from "../../../../Style"
import WriteReviewPopup from "../ReviewPopup/WriteReviewPopup"
import { OverAllGet_Review } from "../ReviewApi"
const OverAllReview = ({ Product, api, SetApi }) => {
    const [Rating, SetRating] = React.useState()
    const classes = useStyles()
    const Id = Product.id
    // const [completed, setCompleted] = React.useState(0);

    // React.useEffect(() => {
    //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    // }, []);
    const testData = [
        { starValue: 5, bgcolor: "#31B665", completed: Rating?.FiveStar    },
        { starValue: 4, bgcolor: "#31B665", completed: Rating?.FourStar    },
        { starValue: 3, bgcolor: "#31B665", completed: Rating?.ThreeStar },
        { starValue: 2, bgcolor: "#31B665", completed: Rating?.TwoStar },

        { starValue: 1, bgcolor: "#31B665", completed: Rating?.OneStar },

    ];

    React.useEffect(() => {
        OverAllGet_Review(Id).then((res) => {
            SetRating(res?.data)
        }).catch(() => { })
    }, [Id, api])

    console.log(Rating)
    return (
        <>
            <div className="container-fluid">

                <div className="row center mt-4">
                    <div className="col-10 px-0 product_review">
                        <h1>Store Details</h1>

                    </div>

                    <div className="col-10 col-sm-10 overall_review_container mt-2">
                        <div className="row">
                            <div className="col-12 text-end my-2">
                                <WriteReviewPopup Product={Product} api={api} SetApi={SetApi} />
                                {/* <button className="overall_review_Button px-2">Write review</button> */}
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12 left_circularbar_heading fontStyle">
                                <p>Review</p>

                            </div>
                            <div className="col-lg-2  col-md-4 col-sm-12 col-12 left_circularbar_container">
                                <div className="row">

                                    <div className="col-lg-12 left_circularbar">
                                        <div style={{ width: 100, height: 100 }}>
                                            <CircularProgressbar value={Rating?.AverageReview} text={Rating?.AverageReview} />
                                        </div>
                                        <p>{Rating?.TotalReview} Review</p>
                                    </div>

                                </div>

                            </div>
                            <div className="col-lg-8  col-md-8 col-sm-12 col-12  right_horizontal_bar">

                                {testData.map((item, idx) => {
                                    return (
                                        <div className="row  mt-2 px-4">
                                            <div className="col-1 overall_flex ">
                                                <span>{item.starValue}</span> <span><AiFillStar className={classes.disp_star_color} /></span>
                                            </div>
                                            <div className="col-10 overAll_Progress_center over_col_height ">
                                                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />

                                            </div>

                                        </div>
                                    )
                                })}

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default OverAllReview