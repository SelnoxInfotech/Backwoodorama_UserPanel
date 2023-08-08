import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import React from "react"
const LawsOptions=()=>{
    const [Values,SetValues]=React.useState([])
    const LawsOptionsListArray=[
        {id:1,name:"USA"},
        {id:2,name:"CANADA"},
        {id:3,name:"International"}
    ]
    return(
        <div className="col-12 lawsContainer my-4">
             <ol className="laws_ol">
                {LawsOptionsListArray.map((items,index)=>{
                    return(
                        <li className=" px-2" key={index}>
                            <div className="col-12 lawsListStyle px-2" onClick={()=>SetValues({...Values,[items.id]:!Values[items.id]})}>
                            <span className="listCountryName">{items.name}</span><span><MdOutlineKeyboardArrowDown color="#707070" size={22}/></span>

                            </div>
                            {Values[items.id]===true &&(
                                <div className="border col-12">
                                    <h1 style={{fontSize:"12px",marginLeft:"10px",height:"100px"}}>list of laws</h1>
                                </div>
                            )}
                        </li>
                    )
                })}
             </ol>
        </div>
    )
}
export default LawsOptions