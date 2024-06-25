import React from 'react';
import { Country, State, City } from 'country-state-city'
import Createcontext from "../../../../../Hooks/Context"
import axios from 'axios';
const Neighborhood = () => {
    const { state } = React.useContext(Createcontext)
    const [AllCity, SetAllCity] = React.useState([])

    React.useEffect(() => {
           console.log(state , Boolean(state.citycode) , state.havecity)
        if (Boolean(state.havecity)) {
             axios.get(`https://nominatim.openstreetmap.org/search`, {
                params: {
                  city: state.City,
                  format: 'json',
                  limit: 50
                }}).then((res)=>{
                    console.log(res.data , "SADasds")
          SetAllCity(res.data)
                })
        }
        else {
            if (Boolean(state.statecode)) { SetAllCity(City.getCitiesOfState(state.countrycode, state.statecode)) }
            else {
                console.log(State.getStatesOfCountry(state.countrycode) ,  "city")
                SetAllCity(State.getStatesOfCountry(state.countrycode))
            }

        }
    }, [state])

    // console.log(Country.getAllCountries())
    // console.log(City.getCitiesOfState("IN", "DL"))

    return (
        <div className='d-flex flex-wrap ' style={{ gap: "5px" }}>
            {
                AllCity?.map((data) => {
                    return <p> { data.display_name || data.name} |</p>
                })
            }

        </div>
    );
};

export default Neighborhood;