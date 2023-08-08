import {MdOutlineKeyboardArrowDown} from "react-icons/md"
const LawsOptions=()=>{
    const LawsOptionsListArray=[{id:1,name:"USA"},{id:2,name:"CANADA"},{id:3,name:"International"}]
    return(
        <div className="col-12 lawsContainer my-4">
             <ol className="laws_ol">
                {LawsOptionsListArray.map((items,index)=>{
                    return(
                        <li className="lawsListStyle px-2">
                            <span className="listCountryName">{items.name}</span><span><MdOutlineKeyboardArrowDown color="#707070" size={22}/></span>
                        </li>
                    )
                })}
             </ol>
        </div>
    )
}
export default LawsOptions