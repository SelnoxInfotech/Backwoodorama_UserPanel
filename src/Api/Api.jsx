import axios from 'axios'
import Cookies from 'universal-cookie';

export function registerEmp(usrdata) {
    let data = axios.post(' https://api.cannabaze.com/DeliveryBoy/Add-Employee/', usrdata);
    return data;
}
// blog Api
export function BlogLike(ID) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    if (token_data) {
        let data = axios.get(`https://api.cannabaze.com/UserPanel/Get-BlogLike/${ID}`,
            {
                headers: { Authorization: `Bearer ${token_data}` }
            },
        );
        return data;
    }
    else {
        let data = axios.get(`https://api.cannabaze.com/UserPanel/Get-BlogLike/${ID}`
        );
        return data;
    }
}
export function Post_BlogLike(id, like) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    let data = axios.post('https://api.cannabaze.com/UserPanel/Add-BlogLike/',
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
        let data = axios.get(`https://api.cannabaze.com/UserPanel/Get-Comment/${ID}`,
            {
                headers: { Authorization: `Bearer ${token_data}` }
            },
        );
        return data;
    }
    else {
        let data = axios.get(`https://api.cannabaze.com/UserPanel/Get-Comment/${ID}`
        );
        return data;
    }
}
export function Post_Comment(id, Comment) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    let data = axios.post('https://api.cannabaze.com/UserPanel/Add-Comment/',
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
export function ViewCountApi(id) {
    let data = axios.post(`https://api.cannabaze.com/UserPanel/Add-BlogView/`,
        {
            blog: id
        },
    );
    return data;
}
export function DespensioriesItem() {
    let data = axios.get(
        'https://api.cannabaze.com/UserPanel/Get-Dispensaries/',
    ).then(response => {
        return response.data
    }).then((res) => {
        return res
    }).catch(
        function (error) { }
    )

    return data
}

export function Store_OverAllGet_Review(id) {
    let data = axios.get(`https://api.cannabaze.com/UserPanel/Get-AverageStoreReviewAndRating/${id}`,
    ).then(response => {
        return response.data
    }).catch(
        function (error) { }
    )

    return data
}

export function Store_Add_Review(Review) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    let data = axios.post(`https://api.cannabaze.com/UserPanel/Add-StoreReview/`,
        Review,
        {
            headers: { Authorization: `Bearer ${token_data}` }
        },
    ).then(response => {
        return response
    }).catch(
        function (error) { }
    )

    return data
}

export async function Store_Get_UserComment(id, storeId) {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    let res = await axios.get(`https://api.cannabaze.com/UserPanel/Get-getStoreReviewbyId/${id}/${storeId}`,
        {
            headers: { Authorization: `Bearer ${token_data}` }
        },

    );
    return res;
}

export async function Store_Get_Review(id) {
    let res = await axios.get(` https://api.cannabaze.com/UserPanel/Get-StoreReview/${id}`,
    );
    return res;
}



// Store Review Api   Dispensaries   

export function Homepagebanner() {
    let banner = axios(`https://api.cannabaze.com/UserPanel/Get-AllHomePageBanner/`, {

    }

    ).then((response) => {
        return response
    }

    ).catch(() => {

    })

    return banner
}
export function getAllNews() {
    let allnews = axios.get("https://api.cannabaze.com/UserPanel/Get-News/").then((response) => {
        return response.data;
    })
    return allnews
}

