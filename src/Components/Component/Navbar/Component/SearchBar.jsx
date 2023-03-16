import {CiSearch} from "react-icons/ci"
const SearchBar = () => {
    return (
        <>
            <div className="d-flex nav_search_bar_div ">
               <input type="text" placeholder="Products Brands Retailers and more"/>
                <div className="vertical_div"></div>
               <input className="sec_input_search" type="text" placeholder="location"/>

                <div className="search_icon"><CiSearch/></div>
            </div>
        </>
    )
}
export default SearchBar