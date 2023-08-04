import axios from 'axios'
import Cookies from 'universal-cookie';



function WishListPost(id) {
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')


  let data = axios.post(` https://sweede.app/UserPanel/Add-Wishlist/`,
    { product: id },
    {
      headers: { Authorization: `Bearer ${token_data}` }
    },
  );
  return data;
}
async function WishListget() {
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
  const config = {
    headers: { Authorization: `Bearer ${token_data}` }
  };

  let data = await axios.get(`https://sweede.app/UserPanel/Get-Wishlist/`,
  config
  );
  return data;
}
export { WishListPost ,WishListget }