import ProgressBar from "./ProgressBar"
import { AiFillStar } from "react-icons/ai"
const OverAllReview = () => {

    const testData = [
        { bgcolor: "#31B665", completed: 60 },
        { bgcolor: "#31B665", completed: 30 },
        { bgcolor: "#31B665", completed: 53 },
        { bgcolor: "#31B665", completed: 53 },

        { bgcolor: "#31B665", completed: 53 },

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
                            <div className="row">
                                <div className="col-1">
                                    {starArray.map((ele, index) => {
                                        return (
                                            <div className="overall_flex" key={index}>
                                                <p>{ele.starValue}</p>
                                                <p>{ele.starIcon}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-10">
                                    {testData.map((item, idx) => (
                                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default OverAllReview