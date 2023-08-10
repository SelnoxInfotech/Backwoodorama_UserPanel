import * as React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Rating } from '@mui/material';
import useStyles from '../../../../Style';
import Axios from "axios"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Createcontext from "../../../../Hooks/Context"
import DeliverServiceSkeleton from '../../../Component/Skeleton/DeliveryServicesSkeleton';
import { es } from 'date-fns/locale';
const DeliveryServices = () => {
    const [DeliveryService, SetDeliveryService] = useState({})
    const [Arrry, SetArry] = useState([])
    const [da, Setda] = React.useState([])
    const { state } = React.useContext(Createcontext)
    const classes = useStyles()
    const [Skeleton, SetSkeleton] = React.useState(true)
    const ref = React.useRef(null);
    const l = []
    React.useEffect(() => {
        Axios(`https://sweede.app/UserPanel/Get-DeliveryStores/`, {
        }
        ).then((response) => {
            SetDeliveryService(response.data)
            SetSkeleton(false)
                const p = []
            // response.data.map((items) => {
                
            //      p.push({ "Store_Name ": items.Store_Name, id: items.id, Category: [{ [items.Category]: items.ProductCount }] })
                  
         
            // })
            // for(let i =0 ; i<response.data.length ; i++ ){
            //     console.log(response.data[i])
            // // p.push(response.data[i])
            //  Setda(prevState => [...prevState, { "Store_Name ": response.data[i].Store_Name, id: response.data[i].id, Category: [{ [response.data[i].Category]: response.data[i].ProductCount }] }])
            
            // }
            //   k(items.Store_Name)
            response.data.forEach(x => {
                if(p.length!=0){
                    p.forEach(y => {
                        if (x.id === y.id) {
                            console.log('1111111')
                            // p.push(...x , { "Store_Name ": y.Store_Name, id: y.id, Category: [{ [y.Category]: y.ProductCount }] })
                        }
                        else{
                            p.push({ "Store_Name ": x.Store_Name, id: x.id, Category: [{ [x.Category]: x.ProductCount }] })
                        }
                      })
                }
                else{
                    p.push({ "Store_Name ": x.Store_Name, id: x.id, Category: [{ [x.Category]: x.ProductCount }] })
                }
              })
              console.log(p)
        }

        ).catch(() => {

        })
    }, [])

    function k(pj) {
        console.log(pj)
        const isPresent = Arrry.find((p) => p.Store_Name === pj);
        console.log(isPresent)


    }
    // 
    // React.useEffect(()=>{

    // },[p])
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row mt-3">
                    {!Skeleton ? <React.Fragment>

                        <div className="col-12 delivery_services_heading px-0">
                            <h1 className='deliveryServicesHEadingPadding'>Delivery services</h1>

                        </div>
                        <div className="col-12 mt-3 delivery_services_subheading px-0">
                            <h2 className='deliveryServicesHEadingPadding'>{state.Location}</h2>

                        </div>
                        <div className="col-12  mt-5 recentViewProductSlider" id="width" ref={ref}>
                            <ScrollContainer className="DeliveryServices_ScrollContainerRelative">
                                {DeliveryService.map((items, index) => {
                                    return (
                                        <div className='dispensoriesContainer col-12 col-sm-6   deliveryServicesEachCardOn_lg_Device' key={index}>
                                            <div className='deliveryServicesBorder '>
                                                <Link to={`/DispensoriesProduct/${items.id}/${"Menu"}`}>
                                                    <div className='col-12 deliveryServicesImage_container'>
                                                        <LazyLoadImage className='deliveryServicesImage' src={`https://sweede.app/${items.Store_Image}`} alt='image not available' />
                                                    </div>
                                                </Link>
                                                <div className='col-12 deliveryServicesContent_container px-4'>
                                                    <Link to={`/DispensoriesProduct/${items.id}/${"Menu"}`}>
                                                        <div className='w-100  deliveryServicesTitle'>
                                                            <p className='ellipsis'>{items.Store_Name}</p>

                                                        </div>
                                                        <div className='w-100 deliveryServices_SubTitle'>
                                                            <p className='ellipsis'>{items.Store_Address}</p>
                                                        </div>
                                                    </Link>
                                                    <div className='w-100 d-flex align-items-center'>
                                                        <span>Rating</span>
                                                        <Rating className={`mx-2 ${classes.homePageStarIcons}`} color='green' name="read-only" value={4} readOnly />


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </ScrollContainer>
                        </div>

                    </React.Fragment> : <DeliverServiceSkeleton></DeliverServiceSkeleton>

                    }
                </div>

            </div>
        </>
    )
}
export default DeliveryServices






        // Setda(response.data.map((items) => {})

            // response.data.map((items) => {
            //     p.push({ "Store_Name ": items.Store_Name, id: items.id, Category: [{ [items.Category]: items.ProductCount }] })
            //     console.log(p)

                // p.map((data)=>{
                //     console.log(data.id === items.id)
                //     if(data.id === items.id ){
                //         console.log(data)
                //     } 

                //   })
                // console.log(Arrry?.filter((id) => id.id))
                // if (Arrry.find(({ id }) => id === items.id)) {
                //     SetArry(
                //         Arrry.map((f) => {

                //             return [{ ...items, "Store_Name ": items.Store_Name, id: items.id, Category: [{ ...f.Category, [items.Category]: items.Category }] }]
                //         })
                //     )
                // }
                // else {
                // }

            // })
            // k(p) 
            // const d =  Arrry?.map((q,i)=>{
            //     console.log(p[i])
            //  })


            // const c = []
            // p.map((data) => {

            //     if (c?.find((items) => items.id === data.id)) {
            //         console.log(items)
            //     }
            //     else {
            //         c.push(data)


            //     }
            // })


            // return Setda(prevState => [...prevState, { "Store_Name ": items.Store_Name, id: items.id, Category: [{ [items.Category]: items.ProductCount }] }])




            // if (Arrry.length === 0) {

            //     SetArry(response.data.map((item) => ({
            //         id: item.id,
            //         Store_Name: item.Store_Name

            //     }))
            //     );
            // }
            // else {
            // response.data.map((items) => {
            //     console.log(items)
            //     if (Arrry.length === 0) {
            //         console.log(true)
            //         SetArry([{...Arrry , ['Store_Name'] : items.Store_Name ,  "id" : items.id     }])
            //     }
            //     else {

            //         // SetArry(
            //         //     Arrry.map((id) => {
            //         //         if (id.id === items.id) {
            //         //             return { ...id, "Category": [{ ...id.Category, [id.Category]: ProductCount }] }
            //         //         }
            //         //         else {
            //         //             return { ...id, id: items.id, Store_Name: items.Store_Name }
            //         //         }
            //         //     })
            //         // )
            //     }
            // })







            // }