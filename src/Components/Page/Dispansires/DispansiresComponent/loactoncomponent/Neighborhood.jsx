import React from 'react';
import { Country, State, City } from 'country-state-city'
import Createcontext from "../../../../../Hooks/Context"
import axios from 'axios';
const Neighborhood = () => {
    const { state } = React.useContext(Createcontext)
    const [AllCity, SetAllCity] = React.useState([])
// console.log(Boolean(City) , City ,  Boolean(state.City) )
    React.useEffect(() => {
        if (Boolean(state.havecity) && Boolean(state.City) ) {
            SetAllCity([])
            // axios.get(`https://nominatim.openstreetmap.org/search`, {
            //     params: {
            //         city: state.City,
            //         format: 'json',
            //         limit: 50
            //     }
            // }).then((res) => {
            //     SetAllCity(res.data)
            // })
        }
        else {
            if (Boolean(state.havestate) &&  Boolean(state.State)) { SetAllCity(City.getCitiesOfState(state.countrycode, state.statecode)) }
            else {
                SetAllCity(State.getStatesOfCountry(state.countrycode))
            }

        }
    }, [state])   
    return (
        <div className='d-flex flex-wrap ' style={{ gap: "5px" }}>
            {
              AllCity.length === 0 ?   <p> no location found in  {state.Location}</p> :  AllCity?.map((data) => {
                    return <p> {data.display_name || data.name} |</p>
                })
            }

        </div>
    );
};

export default Neighborhood;