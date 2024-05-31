import React, { useEffect } from "react"
import NewProductDetailsCards from "./NewProductDetailsComponent/NewProductDetailsCards"
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ProductSearchResult from "../ProductSearchResult/ProductSearchResult"
import Axios from "axios";
import style from "../../../../Style"
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Review from "../../../Component/Review/Review"
import { AiOutlineLeft } from "react-icons/ai";
import { ProductDetailsSeo } from "../../../Component/ScoPage/ProductSeo"
import { product_OverAllGet_Review, Product_Add_Review, Product_Get_UserComment, Product_Get_Review, Delete_Review, ProductHelpFull } from "../ProductApi"
import Createcontext from "../../../../Hooks/Context"
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
const usePlaceholderStyles = makeStyles(theme => ({
  placeholder: {
    color: "#aaa",
    fontWeight: '400'
  }
}));
const NewProductDetails = () => {
  const { id } = useParams();
  const [discount, setdiscount] = React.useState({
    Product: id,
    Amount: '',
    Reflect: false,
    Percentage: '',
    CouponMassage: "",
    DiscountType: ""
  });

  const Params = useParams()
  const { state } = React.useContext(Createcontext)
  const navigate = useNavigate();
  const heading = "You may also like"
  const [Product, SetProduct] = React.useState([])
  const [reviewloading, setReviewloading] = React.useState(false)
  const [StoreProduct, SetStoreProduct] = React.useState([])
  const [Despen, SetDespens] = React.useState([])
  const [api, SetApi] = React.useState(false)
  const [Rating, SetRating] = React.useState()
  const [AllReview, SetReview] = React.useState([])
  const [Price, SetPrice] = React.useState([])
  const [j, h] = React.useState([])
  const [quentity, setquentity] = React.useState(1);
  const [dynamicWeight, setdynamicWeight] = React.useState(0);


  const [GetProductReview, SetGetProductReview] = React.useState({
    value: 0,
    comment: '',
    Title: "",
    media: [],
    popup: false
  })

  const classes = style()
  React.useEffect(() => {
    Axios(`https://api.cannabaze.com/UserPanel/Get-ProductById/${id}`, {
    }).then(response => {
      if (response.data.length === 0) {
        navigate('/404')
      }
      else {
        SetProduct(() => {
          return response.data[0]
        })
        h(response.data[0].Prices[0].Price?.filter((data) => {
          if (data.id === parseInt(Price[0]?.Item_id)) {
            return data
          }
          else {
            if (data.id === 1) {
              return data
            }
          }
        })
        )
        Axios.get(`https://api.cannabaze.com/UserPanel/Get-StoreById/${response.data[0]?.Store_id}`, {
        }).then(response => {
          SetDespens(response.data[0])

        })
        Axios.post(`https://api.cannabaze.com/UserPanel/YouMayAlsoLike/`,
          {
            category: response.data[0].category_id,
            store_id: response.data[0].Store_id
          }
        ).then(response => {
          SetStoreProduct(response.data)
        }).catch(
          function (error) {
          })
      }
    }).catch(
      function (error) {
        navigate('/404')
      })


  }, [id])


  React.useEffect(() => {
    product_OverAllGet_Review(Product.id).then((res) => {

      SetRating(res?.data)
    }).catch(() => { })
  }, [Product.id, api])

  React.useEffect(() => {

    if (state.login && state.Profile.id !== undefined && Product.id !== undefined) {
      Product_Get_UserComment(state.Profile.id, Product.id).then((res) => {

        if (res.data.length !== 0) {
          SetGetProductReview({
            ...GetProductReview, "comment": res.data[0]?.comment,
            "Title": res.data[0]?.Title, "value": res.data[0]?.rating
          })
        }
        else {
          SetGetProductReview({
            ...GetProductReview, "comment": '',
            "Title": '', "value": 0
          })
        }
      }).catch((error) => {
        console.trace(error)
      })

    }
  }, [api, state.Profile, Product])
  const onSubmit = (data) => {
    const formdata = new FormData();
    let a = GetProductReview?.media?.forEach((item) => {
      if (item?.type.includes('image')) {
        formdata.append('multipleimages', item)
      }
    })
    let b = GetProductReview?.media?.forEach((item) => {
      if (item?.type.includes('video')) {
        formdata.append('multiplevideos', item)
      }
    })
    formdata.append('product', Product.id)
    formdata.append('rating', GetProductReview.value)
    formdata.append('Title', GetProductReview.Title)
    formdata.append('comment', GetProductReview.comment)

 
    setReviewloading(true)
    Product_Add_Review(formdata).then((res) => {
      SetGetProductReview({ ...GetProductReview, 'popup': false })
      SetApi(!api)
      setReviewloading(false)
    }).catch(() => {
      setReviewloading(false)

    })
  };

  React.useEffect(() => {
    Product_Get_Review(Product.id).then((res) => {
      SetReview(() => {
        return res.data
      })
      var Obj = _.find(res.data, { user: state.Profile.id });
      SetGetProductReview({ ...GetProductReview, 'popup': false, 'value': Obj.rating, 'Title': Obj.Title, 'comment': Obj.comment })
    }).catch((e) => {
      console.error(e)
    })
  }, [Product, api])

  const Tolastpage = () => {
    let output1 = 'StoreName' in Params;
    let sttp=Product.Store_Type.replace(/y$/, "ies").toLowerCase()
    if(Product.Store_Type==="Curbside Pickup"){
      sttp='dispensaries'
    }
    if (output1) {
      navigate(`/weed-${sttp}/${Params.StoreName.replaceAll(' ', '-').toLowerCase()}/${Product.Store_id}`)
    } else {
      navigate(-1)
    }
  }
  function handleDelete(id) {
    Delete_Review(id).then((res) => {
      res.data.status === 'success' && SetApi(!api)
    })
  }
  function handleEdit() {
    SetGetProductReview({ ...GetProductReview, 'popup': true })
  }
  function HellFull(ReviewId, UserId) {

    ProductHelpFull(ReviewId.id, state.Profile.id).then((res) => {
      SetApi(!api)
    }).catch(() => {
    })
  }


  React.useEffect(() => {
    h(Price.length !== 0 && Product.Prices[0].Price.filter((data) => data.id === parseInt(Price[0].Item_id)))
  }, [Price])
  function discountype(type, amount) {
    switch (type) {
      case "PercentageDiscount":
        return `Get ${amount}%  OFF`
        break;

      default:
      // code block
    }
  }
  const [copyed, setcopyed] = React.useState('');

  useEffect(() => {
    if (copyed !== '') {
      setTimeout(() => setcopyed(''), 2000)
    }
  }, [copyed])

  const location = useLocation()
  if (!StoreProduct.length) {
    return <p>Loading....</p>
  }
console.log(Product)
  return (
    <div className="container-fluid">
      {Object.keys(Product).length !== 0 && <ProductDetailsSeo Productnm={Product.Product_Name} Productname={`Buy ${Product.Product_Name} at ${Product.StoreName} on WeedX.io - Your Trusted Marketplace`} ProductCategory={Product.category_name} StoreName={Product.StoreName} City={Product.Store_City} State={Product.Store_State} location={location.pathname} ></ProductDetailsSeo>
      }
      <span onClick={() => {navigate(location?.state !== null ? (location?.state?.prevuisurl !== '/products' ? location?.state?.prevuisurl : '/products'): '/products')}} className="BackPageBtn"> <AiOutlineLeft size={22} /> Back to products </span>
      <NewProductDetailsCards dynamicWeight={dynamicWeight} setdynamicWeight={setdynamicWeight} quentity={quentity} setquentity={setquentity} Product={Product} DiscountedValue={discount} Price={Price} SetPrice={SetPrice} />
      <div className="offerlist">
        <h2 className="section_main_title">Offers</h2>
        <div className="offerlistwrapper">
          {
            Product.copuon?.map((item) => {
              return <div className="offercard">
                <div className="leftcoupon">
                  <span>Use Code</span>

                  <span onClick={() => { navigator.clipboard.writeText(item.CouponCode); setcopyed(item.CouponCode) }}>{item.CouponCode} {copyed === item.CouponCode && <span className="copytooltip"> copied</span>}  </span>

                  <span>T&C</span>
                </div>
                <div className="rightcoupon">
                  <span>{discountype(item.DiscountType, item.PercentageAmount)}</span>
                  <span>Shopping Above {item.MinimumOrderValue}/-</span>
                  <Link to="/"><span>View All Product</span></Link>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <ProductSearchResult RelatedProductResult={StoreProduct} currentProductID={Product.id} CategoryName={heading} />
      <Review
        delBtn={Despen}
        reviewloading={reviewloading}
        reviewtype={'Product'}
        HellFull={HellFull}
        storeID={null}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        Rating={Rating}
        onSubmit={onSubmit}
        GetProductReview={GetProductReview}
        SetGetProductReview={SetGetProductReview}
        AllReview={AllReview}
        SetReview={SetReview}
        type={"product"}
      ></Review>
    </div>
  )
}
export default NewProductDetails