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
        if (login) {
          axios.get("http://52.3.255.128:8000/UserPanel/Get-Addtocart/", {
            headers: { Authorization: `Bearer ${login}` }
          }).then(function (response) {
            // return response.data.length;
            return { ...state, CartCount: response.data.length }
          })
            .catch(function (error) { })
        }
        else{
          return { ...state, CartCount: count }
        }
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