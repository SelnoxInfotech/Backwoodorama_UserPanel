import ProgressBar from "./ProgressBar"
import { AiFillStar } from "react-icons/ai"
import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useStyles from "../../../../Style"

const OverAllReview = () => {
    const classes=useStyles()

    // const [completed, setCompleted] = React.useState(0);

    // React.useEffect(() => {
    //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    // }, []);
    const testData = [
        { starValue: 5, bgcolor: "#31B665", completed: 60 },
        { starValue: 4, bgcolor: "#31B665", completed: 30 },
        { starValue: 3, bgcolor: "#31B665", completed: 53 },
        { starValue: 2, bgcolor: "#31B665", completed: 53 },

        { starValue: 1, bgcolor: "#31B665", completed: 53 },

    ];

    return (
        <>
            <div className="row center">

                <div className="col-10 col-sm-10 overall_review_container px-2">
                    <div className="row">
                        <div className="col-12 text-end my-2">
                            <button className="overall_review_Button">Write review</button>
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
                                        <CircularProgressbar    value={30} text="4.3"  />
                                    </div>
                                    <p>Review 102</p>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-8  col-md-8 col-sm-12 col-12  right_horizontal_bar">

                            {testData.map((item, idx) => {
                                return (
                                    <div className="row  mt-2 px-4">
                                        <div className="col-1 overall_flex ">
                                            <span>{item.starValue}</span> <span><AiFillStar className={classes.disp_star_color}/></span>
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
        </>
    )
}
export default OverAllReview