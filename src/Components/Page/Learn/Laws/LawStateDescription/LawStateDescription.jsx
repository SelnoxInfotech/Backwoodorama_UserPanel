import React from "react"
import LawStateContent from "./LawStateDescriptionComponent/LawStateContent"
import IsWeedLegalState from "./LawStateDescriptionComponent/IsWeedLegalState"
import LawStateDecriptionBanner from "./LawStateDescriptionComponent/LawStateDecriptionBanner"
import { useLocation, useParams } from 'react-router-dom';
import Content from "../LawContentsJson"
import _ from "lodash"
import { useRef } from 'react';
import { LawState } from "../../../../Component/ScoPage/LearnSeo";
import axios from "axios";
const LawStateDescription = () => {
    const params = useParams()
    const location = useLocation()
    const [GetContant, SetContant] = React.useState([])
    const ref = useRef(null);
    const [offset, setOffset] = React.useState(0);
    const [Id, setId] = React.useState("");
    let divElement;
    const allHeigths = []
    // React.useEffect(() => {
    //     divElement = document.getElementById('Navbar_box')?.clientHeight
    //     window.scrollTo(0, 0)
        
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    //   }, [])

   
 
    React.useEffect(()=>{
        ref.current.childNodes.forEach((item , index)=>{
           
        allHeigths.push({
           topheigth: item.offsetTop,
           id : item.id,
           height : item.clientHeight
          })
        })
       
        for(let i=0 ; i < allHeigths.length -1 ; i++){
           if(offset > allHeigths[i].topheigth - divElement - 100   && offset < allHeigths[i+1].topheigth - divElement ){
            setId(allHeigths[i].id)
           }else if(offset < allHeigths[0].topheigth){
            setId(allHeigths[0].id)
            
           }else if(offset > allHeigths[allHeigths.length -1].topheigth){
            setId(allHeigths[allHeigths.length -1].id)
            
           }
        }
      },[offset])
      function gothroughID(ID){
    
        allHeigths.forEach((item)=>{
          if(item.id === ID){
            window.scrollTo(0, item.topheigth - divElement)
          }
        })
      }
        React.useEffect(() => {
            Content.filter((data, index) => {
                return (
                    data.state.map((d) => {
                        if (d.id === parseInt(params?.id)) {
                            return SetContant(d)
                        }
                        return d
                    })
                )
            })
            axios.post(`https://api.cannabaze.com/UserPanel/Update-SiteMap/13`,
                {
                    j:'https://www.weedx.io' + location.pathname
                },
            ).then((res) => {
            }).catch((err) => {
            })
        
        }, [params.id])

    return (
        <React.Fragment>
            <LawState Title={`Cannabis Law in ${GetContant?.name}`} State={GetContant?.Country} location={useLocation().pathname}></LawState>
            <div className="container-fluid">
                <div className="row">
                    <LawStateDecriptionBanner />
                     <div className="law_contertn"> 
                        <div className="col-12 lawStateDescriptionHeadings">
                            <h1 className="LawStateDescriptionHeading">Cannabis Law in {GetContant?.name}</h1>
                            <hr />
                        </div>
                        <div className="col-12 d-flex">
                            <div className={"col-xl-8 col-md-12"}  ref={ref}>
                                {
                                    GetContant?.content?.map((data1, index) => {
                                    
                                        return (
                                            <React.Fragment key={index}>
                                                <IsWeedLegalState head={data1.title} description2={data1.content} />
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                            <div className={"col-4 hidiingBLog "}>
                                <LawStateContent head={GetContant?.content} gothroughID={gothroughID} />
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </React.Fragment >
    )
}
export default LawStateDescription