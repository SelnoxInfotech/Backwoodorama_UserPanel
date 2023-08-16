import axios from 'axios'
import Cookies from 'universal-cookie';
import Axios from "axios"
function order() {
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
function PendingOrder() {
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

function OrderBYID(id) {
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
  const config = {
    headers: { Authorization: `Bearer ${token_data}` }
  };

  let data = axios.get(`https://sweede.app/UserPanel/Get-GetOrderBYID/${id}`, config);
  return data;
}
function Cancel(id) {
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
  const config = {
    headers: { Authorization: `Bearer ${token_data}` }
  };

  let data = axios.post(`https://sweede.app/UserPanel/Update-Order/${id}`, { Order_Status: 'Cancel' }, config);
  return data;
}

function GetCancelOrder() {
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
  const config = {
    headers: { Authorization: `Bearer ${token_data}` }
  };

  let data = axios.get(`https://sweede.app/UserPanel/Get-GetCancelOrder/`,
    config,
  );
  return data;
}




export { order, PendingOrder, OrderBYID, Cancel,GetCancelOrder }


// https://sweede.app/UserPanel/Get-GetCancelOrder/ 
