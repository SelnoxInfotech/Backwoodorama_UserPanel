
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
    case "LoadingApi":
      {
        return { ...state, LoadingApi: action.LoadingApi }
      }
    case "Order_place":
      {
        return { ...state, Order_place: action.Order_place }
      }
    case "Dispensories":
      {
        return { ...state, Dispensories: action.Dispensories }
      }
    case "Location":
      {
        return { ...state, Location: action.Location }
      }
      case "LocationData":
        {
          return { ...state, LocationData: action.LocationData }
        }
  




    default: return state
  }
};

export default reducer