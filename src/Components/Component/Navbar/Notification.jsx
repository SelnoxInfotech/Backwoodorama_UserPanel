import React from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
import { Link } from 'react-router-dom';
export default function Notification({ notify, setnotify , Setnotificationdata , notificationdata }) {
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    const { state, dispatch } = React.useContext(Createcontext)
    React.useEffect(() => {
        if (state.login) {
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            }
            axios.get(`https://api.cannabaze.com/UserPanel/GetUserNotificationByLogin/`,
                config,
            ).then((res) => {
               
               
                res.data.map((data)=>{
                   
                    data.blog.map((data)=> Setnotificationdata([{...notificationdata , "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.StoreHelpFull.map((data)=> Setnotificationdata([{...notificationdata , "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.ProductHelpfull.map((data)=> Setnotificationdata([{...notificationdata , "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.StoreReview.map((data)=> Setnotificationdata([{...notificationdata , "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.ProductReview.map((data)=> Setnotificationdata([{...notificationdata , "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.Order.map((data)=> Setnotificationdata([{...notificationdata , "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': 'Thank you for your Order Placed is placed'  }]))
                  
                })
               
            }).catch((err) => {

            })
        }
        else {
            axios.get(`https://api.cannabaze.com/UserPanel/GetUserNotification/`,
            ).then((respones) => {
               
                if (respones?.data?.Blog) {
                    respones.data.Blog.map((data) => {
                        Setnotificationdata([{...notificationdata , "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title }])
                    })
                }
                else{
                    Setnotificationdata([{...notificationdata , "link": `/`, 'title': "Welcome TO WeedX" }])
                }
            }).catch((err) => {

            })
        }
    }, [notify])

 console.log(notificationdata)

    return (
        notify &&
        <ClickAwayListener onClickAway={() => { setnotify(false) }}>
            <div className={`notificationList ${ !Boolean(notificationdata?.length) && "nonewnotify"} `}>

          
                <div className='notificationHeader'>
                    <h4 className='notifytitle'>Notification</h4>
                    <span className='clearNotify'>Clear All X</span>
                </div>
                <div className='notificationContainer'>
                    { Boolean(notificationdata?.length)
                        ?
                        notificationdata?.map((data) => {
                            return (
                                <div className='notification_box'>

                                    <Link to={data.link}>
                                        <div className="notification_img">
                                            <div className="notiimgCircle">
                                                <img src="/image/logo.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="notifytext" >
                                        <span className="notify_date ">2 Hours ago</span>
                                            <div className="d-flex align-items-center justify-content-between gap-5"><h4 className="notititle">{data.title} </h4> </div>
                                            {/* <p className='notifyDesctiptio'>iufh dhdu xcijdnfuhun vu urdjknjf nbujkdc jfnvdfsjv d jndfju</p> */}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        :
                        <div className='w-100 h-100 d-flex align-items-center justify-content-center '>No New Notification</div>
                    }
                    </div>

                <div className='notificationFooter'>
                  <span className='clearNotify'>View All</span>
                </div>
            
            </div>
        </ClickAwayListener>

    )
}
