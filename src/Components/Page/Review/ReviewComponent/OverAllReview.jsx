import ProgressBar from "./ProgressBar"
import { AiFillStar } from "react-icons/ai"
const OverAllReview = () => {

    const testData = [
        {starValue:5, bgcolor: "#31B665", completed: 60 },
        {starValue:4, bgcolor: "#31B665", completed: 30 },
        {starValue:3, bgcolor: "#31B665", completed: 53 },
        { starValue:2,bgcolor: "#31B665", completed: 53 },

        {starValue: 1, bgcolor: "#31B665", completed: 53 },

    ];
    const starArray = [
        { starValue: 5, starIcon: <AiFillStar /> },
        { starValue: 4, starIcon: <AiFillStar /> },
        { starValue: 3, starIcon: <AiFillStar /> },
        { starValue: 2, starIcon: <AiFillStar /> },
        { starValue: 1, starIcon: <AiFillStar /> }

    ]
    return (
        <>
            <div className="row center">

                <div className="col-10 store_review_container">
                    <div className="row">
                        <div className="col-12 text-end my-2">
                            <button>Write review</button>
                        </div>
                        <div className="col-12">
                            <p>Review</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4  border left_circularbar">
                            <div>
                                <p>Review 102</p>
                            </div>
                        </div>
                        <div className="col-8 border right_horizontal_bar">
                          
                            {testData.map((item, idx) => {
                                return (
                                    <div className="row  mt-2">
                                        <div className="col-1 overall_flex">
                                           <span>{item.starValue}</span> <span><AiFillStar/></span>
                                        </div>
                                        <div className="col-10 overAll_Progress_center">
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