import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const login = cookies.get("Token_access")
const length = localStorage.getItem("items")

const count = !login && JSON.parse(length)?.length
console.log(count)
const reducer = (state, action) => {
  switch (action.type) {
    case 'Login':
      return { ...state, login: action.login }

    case 'api':
      return { ...state, api: action.api }
    case "CartCount":
      {
        return { ...state, CartCount: action.CartCount}
       
      }
    case "AllProduct":
      {

        return { ...state, AllProduct: action.AllProduct }
      }

    case "DeliveryOption":
      {
        return { ...state, DeliveryOption: action.DeliveryOption }
      }
    case "DeliveryInformation":
      {
        return { ...state, DeliveryInformation: action.DeliveryInformation }
      }



    default: return state
  }
};

export default reducer