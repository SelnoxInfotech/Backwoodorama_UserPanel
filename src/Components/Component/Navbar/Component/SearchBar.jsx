import {CiSearch} from "react-icons/ci"
const SearchBar = () => {
    return (
        <>
            <div className=" nav_search_bar_div ">
               <input type="text" placeholder="Products Brands Retailers and more" className="SearchBar"/>
                {/* <div className="vertical_div"></div> */}
               <input className="sec_input_search SearchBar" type="text" placeholder="location" />
            </div>
        </>
    )
}
export default SearchBar