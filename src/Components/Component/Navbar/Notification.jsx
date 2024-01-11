import React from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener';
import axios from 'axios';
import _ from 'lodash';
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
import { Link, useNavigation } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
export default function Notification({ notify, setnotify, Setnotificationdata, notificationdata }) {
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    const { state } = React.useContext(Createcontext)
    function calculateTImefromDate(value) {
        let diffTime = Math.abs(new Date().valueOf() - new Date(value).valueOf());
        let months = Math.trunc(diffTime / (24 * 60 * 60 * 1000) / 30);
        let days = diffTime / (24 * 60 * 60 * 1000);
        let hours = (days % 1) * 24;
        let minutes = (hours % 1) * 60;
        let secs = (minutes % 1) * 60;
        [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]

        if (months !== 0) {
            return months + " Month ago"
        } else if (days !== 0) {
            return days + " days ago"
        }
        else if (hours !== 0) {
            return hours + " hours ago"
        }
        else if (minutes !== 0) {
            return minutes + " minutes ago"
        }
        else {
            return secs + " secs ago"
        }
    }
    React.useEffect(() => {
        if (state.login) {
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            }
            axios.get(`https://api.cannabaze.com/UserPanel/GetUserNotificationByLogin/`,
                config,
            ).then((res) => {

                // res.data.map((data)=>{

                //     data.blog.map((data)=> Setnotificationdata((notificationdata)=>[ ...notificationdata ,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title , date:calculateTImefromDate(data.updated) , image:data?.Image  }]))
                //     data.StoreHelpFull.map((data)=> Setnotificationdata([...notificationdata ,{  "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                //     data.ProductHelpfull.map((data)=> Setnotificationdata([...notificationdata,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                //     data.StoreReview.map((data)=> Setnotificationdata([...notificationdata ,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                //     data.ProductReview.map((data)=> Setnotificationdata([...notificationdata,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                //     data.Order.map((data)=> Setnotificationdata([...notificationdata ,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': `Thank you for ordering with WeedX.io! Your order #${data.OrderId} is confirmed for $${data.subtotal}.`,date:calculateTImefromDate(data.OrderDate) ,image:data.IdCard  }]))

                // })
                let datax = []
                res.data.forEach((item, index) => {
                    if (item.Order.length !== 0) {
                        datax.push({
                            Image: item.Order[0].IdCard,
                            title: `Thank you for ordering with WeedX.io! Your order #${item.Order[0].OrderId} is confirmed for $${item.Order[0].subtotal}.`,
                            date: item.Order[0].OrderDate,
                            link: `/MyOrderProductDetail/${item.Order[0].OrderId}`
                        })
                    }
                    if (item.blog.length !== 0) {
                        datax.push({
                            Image: item.blog[0].Image,
                            title: item.blog[0].Title,
                            date: item.blog[0].updated,
                            link: `/cannabis-news/${item.blog[0].Title.replace(/ /g, "-").replace("?", "").toLowerCase()}/${item.blog[0].id}`
                        })
                    }
                })
                let newddt = _.sortBy(datax, function (dateObj) {
                    return dateObj.date;
                });

                Setnotificationdata(newddt.reverse())

            }).catch((err) => {

            })
        }
        else {
            axios.get(`https://api.cannabaze.com/UserPanel/GetUserNotification/`,
            ).then((respones) => {
                  console.log(respones ,'respones')
                if (Boolean(respones?.data)) {
                    let newdata = respones.data.Blog.map((data) => {
                        return { "link": `/cannabis-news/${data.blog[0].Title.replace(/ /g, "-").replace("?", "").toLowerCase()}/${data.blog[0].id}`, 'title': data.Title, "image": data.Image, 'date': data.updated }
                    })
                    Setnotificationdata(newdata)

                }
                else {
                    Setnotificationdata([{ ...notificationdata, "link": `/`, 'title': "Welcome TO WeedX" }])
                }
            }).catch((err) => {

            })
        }
    }, [state.login])

    function ClearAll() {
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        }
        axios.post(`https://api.cannabaze.com/UserPanel/ClearNotification/`,
            {
                ClearAll: 'ClearAll'
            },
            config
        ).then((respones) => {
            if (respones.data === "All Notification Clear") {
                Setnotificationdata([])
            }
        }).catch((err) => {

        })
    }
    function Clear(e) {
        console.log(e)
        // const config = {
        //     headers: { Authorization: `Bearer ${token_data}` }
        // }
        // axios.post(`https://api.cannabaze.com/UserPanel/ClearNotification/`,
        //     {
        //         ClearAll: 'ClearAll'
        //     },
        //     config
        // ).then((respones) => {


        // }).catch((err) => {

        // })
    }
    return (
        notify &&
        <ClickAwayListener onClickAway={() => { setnotify(false) }}>
            <div className={`notificationList ${!Boolean(notificationdata?.length) && "nonewnotify"} `}>


                <div className='notificationHeader'>
                    <h4 className='notifytitle'>Notification</h4>
                  { ( Boolean(notificationdata?.length) && state.login ) && <span className='clearNotify' onClick={() => ClearAll()}>Clear All </span>}
                </div>
                <div className='notificationContainer'>
                    {Boolean(notificationdata?.length)
                        ?
                        notificationdata?.map((data, index) => {

                            return (
                                <div className='notification_box'>

                                    <Link to={data.link}>
                                        <div className="notification_img">
                                            <div className="notiimgCircle">
                                                <img src={data.Image} alt="img" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="notifytext w-100" >
                                        <div className='d-flex justify-content-between align-items-center'> <Link to={data.link}>    <span className="notify_date ">{calculateTImefromDate(data.date)}</span> </Link><span className='cursor-pointer' onClick={(e) => Clear(data)}><RxCross2 size={15} color={"#000"} /></span></div>
                                        <Link to={data.link}>  <div className="d-flex align-items-center justify-content-between gap-5"><h4 className="notititle">{data.title} </h4> </div>  </Link>

                                    </div>

                                </div>
                            )
                        })
                        :
                        <div className='w-100 h-100 d-flex align-items-center justify-content-center '>No New Notification</div>
                    }
                </div>

                {/* <div className='notificationFooter'>
                  <span className='clearNotify'>View All</span>
                </div> */}

            </div>
        </ClickAwayListener>

    )
}
