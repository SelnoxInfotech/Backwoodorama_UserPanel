import ReactSwitch from "react-switch";
import React from "react";
const Notification = () => {
    const [Checked, SetChecked] = React.useState({
        Email: false,
        News_Letter: false,
        Review_Suggestions: false,
    })

    const handleChange = (val) => {
        if (val === "Email" && Checked.Email === true) {
            SetChecked({ ...Checked, "Email": false, News_Letter: false, Review_Suggestions: false })
        }
        else {
            SetChecked({ ...Checked, 'Email': true, News_Letter: true, Review_Suggestions: true })
        }
    }
    const handleChange1 = (val) => {
        switch (true) {
            case val === "News_Letter":
                if (Checked.News_Letter === false) {
                    SetChecked({ ...Checked, News_Letter: true, Email: true })
                }
                else {
                    if (Checked.News_Letter === true && Checked.Review_Suggestions === false) {
                        SetChecked({ ...Checked, Email: false, News_Letter: false })
                    }
                    else {

                        SetChecked({ ...Checked, News_Letter: false })
                    }
                }
                break;
            case val === "Review_Suggestions":

                if (Checked.Review_Suggestions === false) {
                    SetChecked({ ...Checked, Review_Suggestions: true, Email: true })
                }
                else {
                    if (Checked.News_Letter === false && Checked.Review_Suggestions === true) {
                        SetChecked({ ...Checked, Email: false, Review_Suggestions: false })
                    }
                    else {
                        SetChecked({ ...Checked, Review_Suggestions: false })
                    }

                }
                break;
            default:
                return null
        }
    }
    const handleChange2 = (val) => {
        SetChecked({ ...Checked, Push_Notification: !Checked.Push_Notification, Recommendations: !Checked.Recommendations })
    }
    const handleChange3 = (val) => {
        if (val === "Savings" && Checked.Savings === true) {
            SetChecked({ ...Checked, "Savings": false, Order_Updates_Push_Notifications: false, Order_Updates_SMS_Notifications: false })
        }
        else {
            SetChecked({ ...Checked, 'Savings': true, Order_Updates_Push_Notifications: true, Order_Updates_SMS_Notifications: true })
        }
    }
    const handleChange4 = (val) => {
        switch (true) {
            case val === "Order_Updates_Push_Notifications":
                if (Checked.Order_Updates_Push_Notifications === false) {
                    SetChecked({ ...Checked, Order_Updates_Push_Notifications: true, Savings: true })
                }
                else {
                    if (Checked.Order_Updates_Push_Notifications === true && Checked.Order_Updates_Push_Notifications === false) {
                        SetChecked({ ...Checked, Savings: false, Order_Updates_Push_Notifications: false })
                    }
                    else {

                        SetChecked({ ...Checked, Order_Updates_Push_Notifications: false })
                    }
                }
                break;
            case val === "Order_Updates_SMS_Notifications":

                if (Checked.Order_Updates_SMS_Notifications === false) {
                    SetChecked({ ...Checked, Order_Updates_SMS_Notifications: true, Email: true })
                }
                else {
                    if (Checked.Order_Updates_Push_Notifications === false && Checked.Order_Updates_SMS_Notifications === true) {
                        SetChecked({ ...Checked, Savings: false, Order_Updates_SMS_Notifications: false })
                    }
                    else {
                        SetChecked({ ...Checked, Order_Updates_SMS_Notifications: false })
                    }

                }
                break;
            default:
                return null
        }
    }




    const EmailNotification = [{ heading: "News Letter", subHeading: "Weekly newsletter on the hottest topics and trends in the cannabis community.", Value: "News_Letter" },
    { Value: "Review_Suggestions", heading: "Review Suggestions", subHeading: "Reminders for you to share your experiences about the products and businesses you found on backaroma" }
    ]
    const OrderUpdates = [{ Value: "Order_Updates_Push_Notifications", heading: "Order Updates - Push Notifications", subHeading: "Receive timely updates to track the status of your order" },
    { Value: "Order_Updates_SMS_Notifications", heading: "Order Updates - SMS Notifications", subHeading: "Receive timely updates to track the status of your order" }
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
                            <ReactSwitch
                                onColor={"#D9D9D9"}
                                onHandleColor={"#31B665"}
                                height={20} width={60}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                checked={Checked?.Email}
                                onChange={() => { handleChange("Email") }} />
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
                                        <ReactSwitch
                                            onColor={"#D9D9D9"}
                                            onHandleColor={"#31B665"}
                                            height={20}
                                            width={60}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            checked={Checked?.Email === true ? Checked[items.Value] : false}
                                            onChange={() => { handleChange1(items.Value) }}
                                        />
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
                            <ReactSwitch onColor={"#D9D9D9"}
                                onHandleColor={"#31B665"}
                                height={20}
                                width={60}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                checked={Checked?.Push_Notification}
                                onChange={() => { handleChange2("Push_Notification") }}
                            />
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
                            <ReactSwitch
                                onColor={"#D9D9D9"}
                                onHandleColor={"#31B665"}
                                height={20}
                                width={60}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                checked={Checked?.Push_Notification}
                                onChange={() => { handleChange2("Recommendations") }}

                            />
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
                            <ReactSwitch
                                onColor={"#D9D9D9"}
                                onHandleColor={"#31B665"}
                                height={20}
                                width={60}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                checked={Checked?.Savings}
                                onChange={() => { handleChange3('Savings') }} />
                        </div>



                    </div>
                    {
                        OrderUpdates.map((items, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-10 notification_col_height2">

                                        <section className="notification_content_section">
                                            <span className="email_notification_inner_headings">{items.heading}</span>
                                            <p className="email_notification_sub_headings">{items.subHeading}</p>
                                        </section>

                                    </div>
                                    <div className="col-2 notification_col_ReactSwitch">
                                        <ReactSwitch
                                            onColor={"#D9D9D9"}
                                            onHandleColor={"#31B665"}
                                            height={20}
                                            width={60}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            checked={Checked?.Savings === true ? Checked[items.Value] : false}
                                            onChange={() => { handleChange4(items.Value) }} />
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