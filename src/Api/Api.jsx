import axios from 'axios'


export function registerEmp(usrdata) {
    let data = axios.post(' https://sweede.app/DeliveryBoy/Add-Employee/', usrdata);
    return data;
}