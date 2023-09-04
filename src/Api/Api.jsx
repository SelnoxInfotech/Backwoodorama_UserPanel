import axios from 'axios'
import Cookies from 'universal-cookie';


export function registerEmp(usrdata) {
    let data = axios.post(' https://sweede.app/DeliveryBoy/Add-Employee/', usrdata);
    return data;
}


// blog Api

export function BlogLike(ID) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    if (token_data) {
        let data = axios.get(`https://sweede.app/UserPanel/Get-BlogLike/${ID}`,
            {
                headers: { Authorization: `Bearer ${token_data}` }
            },
        );
        return data;
    }
    else {
        let data = axios.get(`https://sweede.app/UserPanel/Get-BlogLike/${ID}`
        );
        return data;
    }
}

export function Post_BlogLike(id, like) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    let data = axios.post('https://sweede.app/UserPanel/Add-BlogLike/',
        {
            Blog: id,
            like: like
        },
        {
            headers: { Authorization: `Bearer ${token_data}` }
        },
    );
    return data;
}
export function Get_Comment(ID) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    if (token_data) {
        let data = axios.get(`https://sweede.app/UserPanel/Get-Comment/${ID}`,
            {
                headers: { Authorization: `Bearer ${token_data}` }
            },
        );
        return data;
    }
    else {
        let data = axios.get(`https://sweede.app/UserPanel/Get-Comment/${ID}`
        );
        return data;
    }
}
export function Post_Comment(id, Comment) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    let data = axios.post('https://sweede.app/UserPanel/Add-Comment/',
        {
            Blog: id,
            comment: Comment
        },
        {
            headers: { Authorization: `Bearer ${token_data}` }
        },
    );
    return data;
}


// Store Review Api   Dispensaries   

