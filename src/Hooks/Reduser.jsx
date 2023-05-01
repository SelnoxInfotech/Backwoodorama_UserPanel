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

    case 'ApiProduct':
      return { ...state, ApiProduct: action.ApiProduct }
    case "CartCount":
      {
        return { ...state, CartCount: action.CartCount }

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
    case "Cart_subTotal":
      {
        return { ...state, Cart_subTotal: action.Cart_subTotal }
      }



    default: return state
  }
};

export default reducer