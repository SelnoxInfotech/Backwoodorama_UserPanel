import ReactSwitch from "react-switch";
import React from "react";
const Notification = () => {
    const [Checked, SetChecked] = React.useState(true)
    const handleChange = (val) => {
        SetChecked(val)
    }
    const EmailNotification = [{ heading: "News Letter", subHeading: "Weekly newsletter on the hottest topics and trends in the cannabis community." },
    { heading: "Review Suggestions", subHeading: "Reminders for you to share your experiences about the products and businesses you found on backaroma" }
    ]
    const OrderUpdates = [{ heading: "Order Updates - Push Notifications", subHeading: "Receive timely updates to track the status of your order" },
    { heading: "Order Updates - SMS Notifications", subHeading: "Receive timely updates to track the status of your order" }
    ]

    return (
        <div className="col-12  mt-4">
            <div className="row mx-0 px-0">
                <div className="col-lg-8 col-12 email_notification">
                    <div className="row">
                        <div className="col-10 notification_col_height2">

                            <section className="notification_content_section">
                                <span className="email_notification_headings">Email</span>

                            </section>

                        </div>
                        <div className="col-2 notification_col_ReactSwitch">
                            <ReactSwitch onColor={"#D9D9D9"}  onHandleColor={"#31B665"} height={20} width={60} uncheckedIcon={false} checkedIcon={false} checked={Checked} onChange={handleChange} />
                        </div>



                    </div>

                    {
                        EmailNotification.map((items, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-10 notification_col_height2">

                                        <section className="notification_content_section">
                                            <span className="email_notification_inner_headings">{items.heading}</span>
                                            <p className="email_notification_sub_headings">{items.subHeading}</p>
                                        </section>

                                    </div>
                                    <div className="col-2 notification_col_ReactSwitch">
                                        <ReactSwitch onColor={"#D9D9D9"}  onHandleColor={"#31B665"} height={20} width={60} uncheckedIcon={false} checkedIcon={false} checked={Checked} onChange={handleChange} />
                                    </div>



                                </div>
                            )
                        })
                    }

                    <div className="row">
                        <div className="col-10 notification_col_height2">

                            <section className="notification_content_section">
                                <span className="email_notification_headings">Push Notification</span>

                            </section>

                        </div>
                        <div className="col-2 notification_col_ReactSwitch">
                            <ReactSwitch onColor={"#D9D9D9"}  onHandleColor={"#31B665"} height={20} width={60} uncheckedIcon={false} checkedIcon={false} checked={Checked} onChange={handleChange} />
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-10 notification_col_height2">

                            <section className="notification_content_section">
                                <span className="email_notification_inner_headings">Recommendations</span>
                                <p className="email_notification_sub_headings">Recommendations of products we think you'll love.</p>

                            </section>

                        </div>
                        <div className="col-2 notification_col_ReactSwitch">
                            <ReactSwitch onColor={"#D9D9D9"}  onHandleColor={"#31B665"} height={20} width={60} uncheckedIcon={false} checkedIcon={false} checked={Checked} onChange={handleChange} />
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-10 notification_col_height2">

                            <section className="notification_content_section">
                                <span className="email_notification_headings">Savings</span>
                                <p className="email_saving_sub_heading">Daily updates about savings nearby.</p>

                            </section>

                        </div>
                        <div className="col-2 notification_col_ReactSwitch">
                            <ReactSwitch onColor={"#D9D9D9"}  onHandleColor={"#31B665"} height={20} width={60} uncheckedIcon={false} checkedIcon={false} checked={Checked} onChange={handleChange} />
                        </div>



                    </div>
                    {
                        OrderUpdates.map((items,index)=>{
                            return(
                                <div className="row" key={index}>
                                    <div className="col-10 notification_col_height2">

                                        <section className="notification_content_section">
                                            <span className="email_notification_inner_headings">{items.heading}</span>
                                            <p className="email_notification_sub_headings">{items.subHeading}</p>
                                        </section>

                                    </div>
                                    <div className="col-2 notification_col_ReactSwitch">
                                        <ReactSwitch onColor={"#D9D9D9"}  onHandleColor={"#31B665"} height={20} width={60} uncheckedIcon={false} checkedIcon={false} checked={Checked} onChange={handleChange} />
                                    </div>



                                </div>
                            )
                        })
                    }


                </div>

            </div>


        </div>
    )
}
export default Notification