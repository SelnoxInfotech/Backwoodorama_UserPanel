import axios from 'axios'
 
import Cookies from 'universal-cookie';
import React from 'react';
export function registerEmp(usrdata) {
    let data = axios.post(' https://api.cannabaze.com/DeliveryBoy/Add-Employee/', usrdata);
    return data;
}

// Static Image Api 
export function StaticImages() {
    let data = axios.get(`https://api.cannabaze.com/AdminPanel/Get-StaticImages/`
    );
    return data;
}


// End

// blog Api
export function BlogLike(ID) {
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
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
    const token_data = cookies.get('User_Token_access')
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
    const token_data = cookies.get('User_Token_access')
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
    const token_data = cookies.get('User_Token_access')
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
export function DespensioriesItem(object) {
    let data = axios.post(
        'https://api.cannabaze.com/UserPanel/Get-Dispensaries/',
        object
    ).then(response => {
        return response?.data

    }).then((res) => {
        return res
    }).catch(
        function (error) { return [] }
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
    const token_data = cookies.get('User_Token_access')
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
export function Delete_StoreReview(id) {
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    let data = axios.delete(`https://api.cannabaze.com/UserPanel/Delete-StoreReview/${id}`,
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
    const token_data = cookies.get('User_Token_access')
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


// product page Api 
export function CategoryProductsearch( object , id) {
    return (
        axios.post(`https://api.cannabaze.com/UserPanel/Get-ProductByCategory/${id}`, object).then((res) => {
            return res
        }).then((response) => {

            if (response.data === "There is no Product") {
                return []
            }
            else {
                return response.data
            }

        })
    )
}

export function GetProduct(object) {
    return (
        axios.post(`https://api.cannabaze.com/UserPanel/Get-AllProduct/`,
            object
        ).then(response => {
            return response
        }).catch(
            function (error) {
                return []
            })
    )
}

export function SubCategoryApi(_id) {
    return (

        axios.get(`https://api.cannabaze.com/UserPanel/Get-SubCategoryByCategory/${_id}`).then((res) => {
            return res
        })
    )
}

export function SubcategoryProduct(object, id) {
    return (
        axios.post(`https://api.cannabaze.com/UserPanel/Get-ProductBySubCategory/${id}`, object).then((res) => {
            return res.data
            // SubCategoryApi(res.data[0].category_id)
            // SetLoading(false)

        }).catch((err) => {
            // SetLoading(false)
            // SetProduct([])
        })
    )
}


export function GetAllDelivery(object) {
<<<<<<< HEAD
=======
    // console.log(object)
>>>>>>> 77fab5dcd65875e2b722b60195ae18137e97134a
    return (
        axios.post(
            'https://api.cannabaze.com/UserPanel/Get-DeliveryStores/',
            object
        ).then(response => {
            const k = response.data.reduce((acc, current) => {
                const x = acc.find(item => item.id === current.id);
                if (!x) {
                    const newCurr = {
                        Store_Name: current.Store_Name,
                        Category: [{ [current.Category]: current.ProductCount }],
                        id: current.id,
                        Store_Image: current.Store_Image,
                        Store_Address: current.Store_Address,
                        rating: current.rating,
                        TotalRating: current.TotalRating
                    }
                    return acc.concat([newCurr]);
                } else {
                    const currData = x.Category.filter(d => d === current.Category);
                    if (!currData.length) {
                        const newData = x.Category.push({ [current.Category]: current.ProductCount });
                        const newCurr = {
                            Store_Name: current.Store_Name,
                            Category: newData,
                            id: current.id,
                            Store_Image: current.Store_Image,
                            Store_Address: current.Store_Address,
                            rating: current.rating,
                            TotalRating: current.TotalRating

                        }
                        return acc;
                    } else {
                        return acc;
                    }
                    //   Category: [{ [y.Category]: y.ProductCount }] 
                }
            }, []);
            return k
        }).catch(
            function (error) {

            })
    )
}



export function PriceFilter(value, Store_id) {
    return (
        axios.post(`https://api.cannabaze.com/UserPanel/PriceFilter/`,
            {
                "MinPrice": value[0],
                "MaxPrice": value[1],
                "Store": Store_id
            },
        ).then((res) => {
            return (res)
        })
    )

}
export function StoreHelpFull(ReviewID, USerID) {
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    const config = {
        headers: { Authorization: `Bearer ${token_data}` }
    };
    return (
        axios.post(`https://api.cannabaze.com/UserPanel/Add-Helpfull/`,

            {
                "review": ReviewID,
                "userid": USerID
            },
            config

        ).then((res) => {
            return (res)
        })
    )

}




