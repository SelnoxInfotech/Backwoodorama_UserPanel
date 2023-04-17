import React, { useReducer, createContext } from 'react';
import Reducer from '../Hooks/Reduser'
import Cookies from 'universal-cookie';

const Createcontext = createContext();
const cookies = new Cookies();
const login = cookies.get("Token_access")
const length = localStorage.getItem("items")
const count = JSON.parse(length)?.length
const log = login ? true :  false
const initialUser = {

    login: log,
    api: "",
    CartCount: count,
    AllProduct: []
}
function Context(props) {
    const [state, dispatch] = useReducer(Reducer, initialUser)



    return (
        
        <Createcontext.Provider value={{ state, dispatch }} >
            
            {props.children}
        </Createcontext.Provider>

    )

}

export default Createcontext;
export { Context }