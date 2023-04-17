
const reducer = (state, action) => {
  switch (action.type) {
    case 'Login':
      return { ...state, login: action.login }

    case 'api':
      return { ...state, api: action.api }
    case "CartCount":
      {
        return { ...state, CartCount: action.CartCount }
      }
      case "AllProduct": 
        {
          return { ...state, AllProduct: action.AllProduct }
        }
  

    default: return state
  }
};

export default reducer