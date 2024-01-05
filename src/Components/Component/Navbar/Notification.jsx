import React from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
import { Link } from 'react-router-dom';
export default function Notification({ notify, setnotify , Setnotificationdata , notificationdata }) {
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    const { state } = React.useContext(Createcontext)
    function calculateTImefromDate(value){
      
      let diffTime = Math.abs(new Date().valueOf() - new Date(value).valueOf());
      let months = Math.trunc( diffTime / (24*60*60*1000)/30);
      let days = diffTime / (24*60*60*1000);
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let secs = (minutes % 1) * 60;
      [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
     
     if(months !==0){
        return months + " Month ago"
     }else if(days !== 0)
      {
        return days + " days ago"
      }
      else if(hours !== 0){
        return hours + " hours ago"
      }
      else if(minutes !== 0){
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
               console.log(res.data)
               
                res.data.map((data)=>{
                    data.blog.map((data)=>  Setnotificationdata((notificationdata)=>[ ...notificationdata ,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    // data.blog.map((data)=> Setnotificationdata([ ...notificationdata ,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.StoreHelpFull.map((data)=> Setnotificationdata([...notificationdata ,{  "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.ProductHelpfull.map((data)=> Setnotificationdata([...notificationdata,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.StoreReview.map((data)=> Setnotificationdata([...notificationdata ,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.ProductReview.map((data)=> Setnotificationdata([...notificationdata,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title  }]))
                    data.Order.map((data)=> Setnotificationdata([...notificationdata ,{ "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': `Thank you for ordering with WeedX.io! Your order #${data.OrderId} is confirmed for $${data.subtotal}.`,date:calculateTImefromDate(data.OrderDate) ,image:data.IdCard  }]))
                  
                })
               
            }).catch((err) => {

            })
        }
        else {
            axios.get(`https://api.cannabaze.com/UserPanel/GetUserNotification/`,
            ).then((respones) => {
               
                if (respones?.data?.Blog) {
                    respones.data.Blog.forEach((data) => {
                        Setnotificationdata([{...notificationdata , "link": `/cannabis-news/${data.Title}/${data.id}`, 'title': data.Title }])
                    })
                }
                else{
                    Setnotificationdata([{...notificationdata , "link": `/`, 'title': "Welcome TO WeedX" }])
                }
            }).catch((err) => {

            })
        }
    }, [])

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
                                                <img src={data.image} alt="img" />
                                            </div>
                                        </div>
                                        <div className="notifytext" >
                                        <span className="notify_date ">{data.date}</span>
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
