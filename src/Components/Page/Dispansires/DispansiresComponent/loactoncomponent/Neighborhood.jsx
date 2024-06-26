import React from 'react';
import { Country, State, City } from 'country-state-city'
import Createcontext from "../../../../../Hooks/Context"
import axios from 'axios';
const Neighborhood = () => {
    const { state } = React.useContext(Createcontext)
    const [AllCity, SetAllCity] = React.useState([])

    React.useEffect(() => {
        if (Boolean(state.havecity)) {
            axios.get(`https://nominatim.openstreetmap.org/search`, {
                params: {
                    city: state.City,
                    format: 'json',
                    limit: 50
                }
            }).then((res) => {
                console.log(res.data, "SADasds")
                SetAllCity(res.data)
            })
        }
        else {
            if (Boolean(state.havestate)) { SetAllCity(City.getCitiesOfState(state.countrycode, state.statecode)) }
            else {
                SetAllCity(State.getStatesOfCountry(state.countrycode))
            }

        }
    }, [state])

    return (
        <div className='d-flex flex-wrap ' style={{ gap: "5px" }}>
            {
                AllCity?.map((data) => {
                    return <p className='mb-0'> {data.display_name || data.name} |</p>
                })
            }

        </div>
    );
};

export default Neighborhood;