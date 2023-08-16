import axios from 'axios'
import Cookies from 'universal-cookie';

 function order (){
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const config = {
        headers: { Authorization: `Bearer ${token_data}` }
      };
  
    let data = axios.get(`https://sweede.app/UserPanel/Get-Order/`,
    config,
    );
    return data;
}
function PendingOrder (){
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
  const config = {
      headers: { Authorization: `Bearer ${token_data}` }
    };

  let data = axios.get(`https://sweede.app/UserPanel/Get-GetPendingOrder/`,
  config,
  );
  return data;
}

export {order,PendingOrder}




