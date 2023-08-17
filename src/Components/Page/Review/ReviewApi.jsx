import axios from 'axios'
import Cookies from 'universal-cookie';



function Add_Review (data) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    let res = axios.post(` https://sweede.app/UserPanel/Add-Review/`,
    data,
    {
      headers: { Authorization: `Bearer ${token_data}` }
    },
  );
  return res;
}


function Get_Review (id) {
    let res = axios.get(` https://sweede.app/UserPanel/Get-Review/${id}`,
  );
  return res;
}
export {Add_Review , Get_Review}