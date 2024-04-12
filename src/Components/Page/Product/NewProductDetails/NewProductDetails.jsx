import React, { useEffect } from "react"
import NewProductDetailsCards from "./NewProductDetailsComponent/NewProductDetailsCards"
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ProductSearchResult from "../ProductSearchResult/ProductSearchResult"
import Axios from "axios";
import style from "../../../../Style"
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Review from "../../Review/Review"
import { AiOutlineLeft } from "react-icons/ai";
import { ProductDetailsSeo } from "../../../Component/ScoPage/ProductSeo"
import { product_OverAllGet_Review, Product_Add_Review, Product_Get_UserComment, Product_Get_Review, Delete_Review, ProductHelpFull } from "../ProductApi"
import Createcontext from "../../../../Hooks/Context"
import _ from 'lodash'
import {Link} from 'react-router-dom'
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
    const Review = {
      product: Product.id,
      rating: GetProductReview.value,
      Title: GetProductReview.Title,
      comment: GetProductReview.comment
    }
    setReviewloading(true)
    Product_Add_Review(Review).then((res) => {
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

    if (output1) {
      navigate(`/weed-${Product.Store_Type.replace(/y$/, "ies")}/${Params.StoreName.replaceAll(' ', '-')}/${Product.Store_id}`)
    } else {
      navigate(`/products`)
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

  const Placeholder = ({ children }) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
  };

  const handlediscountChange = (event) => {
    if (event.target.value.DiscountType === "Amount off Order") {
      if (event.target.value.NoMinimumRequirements === true) {
        if (event.target.value.PercentageAmount !== null || "") {
          setdiscount({
            ...discount,
            "Percentage": event.target.value.PercentageAmount,
            'Reflect': false, "DiscountType": "Amount off Order",
            'CouponMassage': "Offer Apply on Add To Cart ",
          });
        }
        else {
          setdiscount({
            ...discount,
            "Amount": event.target.value.ValueAmount,
            'Reflect': false,
            "DiscountType": "Amount off Order",
            'CouponMassage': "Offer Apply on Add To Cart ",
          });
        }
      }
      else {
        if (event.target.value.MinimumQuantityofItem !== null || "") {

          if (event.target.value.PercentageAmount !== null || "") {
            setdiscount({
              ...discount,
              "MinimumQuantityofItem": event.target.value.MinimumQuantityofItem,
              'Reflect': false,
              "DiscountType": "Amount off Order",
              'CouponMassage': "Minimum Quantity of Item ",
              "Percentage": event.target.value.PercentageAmount,

            });

          }
          else {
            setdiscount({
              ...discount,
              "MinimumQuantityofItem": event.target.value.MinimumQuantityofItem,
              'Reflect': false,
              "DiscountType": "Amount off Order",
              'CouponMassage': "Minimum Quantity of Item ",
              "Amount": event.target.value.ValueAmount,
            });
          }
        }
        else {
          if (event.target.value.MinimumPurchaseAmount !== null || "") {

            if (event.target.value.PercentageAmount !== null || "") {

              setdiscount({
                ...discount,
                "MinimumPurchaseAmount": event.target.value.MinimumPurchaseAmount,
                'Reflect': false,
                "DiscountType": "Amount off Order",
                'CouponMassage': "Minimum Purchase of Amount ",
                "Percentage": event.target.value.PercentageAmount,

              });
            }
            else {
              setdiscount({
                ...discount,
                "MinimumPurchaseAmount": event.target.value.MinimumPurchaseAmount,
                'Reflect': false,
                "DiscountType": "Amount off Order",
                'CouponMassage': "Minimum Purchase of Amount ",
                "Amount": event.target.value.ValueAmount

              });

            }
          }
        }
      }

    }
    else if (event.target.value.DiscountType === "Amount off Products") {
      if (event.target.value.NoMinimumRequirements === true) {
        if (event.target.value.PercentageAmount !== null || "") {

          setdiscount({
            ...discount,
            "Percentage": event.target.value.PercentageAmount,
            'Reflect': true,
            "DiscountType": "Amount off Products",
            "AutomaticDiscount": event.target.value.AutomaticDiscount,
            "DiscountCode": "",
            'id': event.target.value.id,
            'price': parseInt(dynamicWeight) !== 0
              ? parseInt(dynamicWeight * quentity) - ((Boolean(event.target.value.PercentageAmount) ? (dynamicWeight * quentity) * parseInt(event.target.value.PercentageAmount) / 100 : parseInt(event.target.value.Amount)))
              :
              Product?.Prices?.map((data) => { return ((data.Price[0].SalePrice * quentity - (Boolean(event.target.value.PercentageAmount) ? parseInt((data.Price[0].SalePrice * quentity) * parseInt(event.target.value.PercentageAmount) / 100) : parseInt(event.target.value.Amount)))) })[0]

          });
        }
        else {
          setdiscount({
            ...discount,
            "Amount": event.target.value.ValueAmount,
            'Reflect': true,
            "DiscountType": "Amount off Products",
            "AutomaticDiscount": event.target.value.AutomaticDiscount,
            "DiscountCode": "",
            'id': event.target.value.id,
            'price': parseInt(dynamicWeight) !== 0
              ? parseInt(dynamicWeight * quentity) - ((Boolean(event.target.value.PercentageAmount) ? (dynamicWeight * quentity) * parseInt(event.target.value.PercentageAmount) / 100 : parseInt(event.target.value.Amount)))
              :
              Product?.Prices?.map((data) => { return ((data.Price[0].SalePrice * quentity - (Boolean(event.target.value.PercentageAmount) ? parseInt((data.Price[0].SalePrice * quentity) * parseInt(event.target.value.PercentageAmount) / 100) : parseInt(event.target.value.Amount)))) })[0]


          });
        }
      }
      else {
        if (event.target.value.MinimumQuantityofItem !== null || "") {
          if (event.target.value.PercentageAmount !== null || "") {
            setdiscount({
              ...discount,
              "MinimumQuantityofItem": event.target.value.MinimumQuantityofItem,
              'Reflect': false,
              "DiscountType": "Amount off Products",
              'CouponMassage': "Minimum Quantity of Item",
              "Percentage": event.target.value.PercentageAmount,
              // "Coupoun": event.target.value.PercentageAmount,
              "AutomaticDiscount": event.target.value.AutomaticDiscount,
              "DiscountCode": "",
              'id': event.target.value.id,
              'price': parseInt(dynamicWeight) !== 0
                ? parseInt(dynamicWeight * quentity) - ((Boolean(event.target.value.PercentageAmount) ? (dynamicWeight * quentity) * parseInt(event.target.value.PercentageAmount) / 100 : parseInt(event.target.value.Amount)))
                :
                Product?.Prices?.map((data) => { return ((data.Price[0].SalePrice * quentity - (Boolean(event.target.value.PercentageAmount) ? parseInt((data.Price[0].SalePrice * quentity) * parseInt(event.target.value.PercentageAmount) / 100) : parseInt(event.target.value.Amount)))) })[0]


            });

          }
          else {
            setdiscount({
              ...discount,
              "MinimumQuantityofItem": event.target.value.MinimumQuantityofItem,
              'Reflect': false,
              "DiscountType": "Amount off Products",
              'CouponMassage': "Minimum Quantity of Item ",
              "Amount": event.target.value.ValueAmount,
              "AutomaticDiscount": event.target.value.AutomaticDiscount,
              "DiscountCode": "",
              'id': event.target.value.id,
              'price': parseInt(dynamicWeight) !== 0
                ? parseInt(dynamicWeight * quentity) - ((Boolean(event.target.value.PercentageAmount) ? (dynamicWeight * quentity) * parseInt(event.target.value.PercentageAmount) / 100 : parseInt(event.target.value.Amount)))
                :
                Product?.Prices?.map((data) => { return ((data.Price[0].SalePrice * quentity - (Boolean(event.target.value.PercentageAmount) ? parseInt((data.Price[0].SalePrice * quentity) * parseInt(event.target.value.PercentageAmount) / 100) : parseInt(event.target.value.Amount)))) })[0]


            });
          }
        }
        else {
          if (event.target.value.MinimumPurchaseAmount !== null || "") {

            if (event.target.value.PercentageAmount !== null || "") {
              setdiscount({
                ...discount,
                "MinimumPurchaseAmount": event.target.value.MinimumPurchaseAmount,
                'Reflect': false,
                "DiscountType": "Amount off Products",
                'CouponMassage': "Minimum Purchase of Amount ",
                "Percentage": event.target.value.PercentageAmount,
                "AutomaticDiscount": event.target.value.AutomaticDiscount,
                'DiscountCode': "",
                'id': event.target.value.id,
                'price': parseInt(dynamicWeight) !== 0
                  ? parseInt(dynamicWeight * quentity) - ((Boolean(event.target.value.PercentageAmount) ? (dynamicWeight * quentity) * parseInt(event.target.value.PercentageAmount) / 100 : parseInt(event.target.value.Amount)))
                  :
                  Product?.Prices?.map((data) => { return ((data.Price[0].SalePrice * quentity - (Boolean(event.target.value.PercentageAmount) ? parseInt((data.Price[0].SalePrice * quentity) * parseInt(event.target.value.PercentageAmount) / 100) : parseInt(event.target.value.Amount)))) })[0]


              });
            }
            else {
              setdiscount({
                ...discount,
                "MinimumPurchaseAmount": event.target.value.MinimumPurchaseAmount,
                'Reflect': false,
                "DiscountType": "Amount off Products",
                'CouponMassage': "Minimum Purchase of Amount ",
                "Amount": event.target.value.ValueAmount,
                "AutomaticDiscount": event.target.value.AutomaticDiscount,
                "DiscountCode": "",
                'id': event.target.value.id,
                'price': parseInt(dynamicWeight) !== 0
                  ? parseInt(dynamicWeight * quentity) - ((Boolean(event.target.value.PercentageAmount) ? (dynamicWeight * quentity) * parseInt(event.target.value.PercentageAmount) / 100 : parseInt(event.target.value.Amount)))
                  :
                  Product?.Prices?.map((data) => { return ((data.Price[0].SalePrice * quentity - (Boolean(event.target.value.PercentageAmount) ? parseInt((data.Price[0].SalePrice * quentity) * parseInt(event.target.value.PercentageAmount) / 100) : parseInt(event.target.value.Amount)))) })[0]



              });

            }
          }
        }
      }
    }
    else if (event.target.value.DiscountType === "Buy X get Y") {
      setdiscount({
        ...discount,
        "MinimumPurchaseAmount": event.target.value.MinimumPurchaseAmount,
        'Reflect': false,
        "DiscountType": "Buy X get Y",
        'CouponMassage': "Minimum Purchase of Amount ",
        "Amount": event.target.value.ValueAmount,
        "AutomaticDiscount": event.target.value.AutomaticDiscount,
        "DiscountCode": "",
        'id': event.target.value.id,
        'CustomerGets': event.target.value.CustomerGets
      });

    }
    else if (event.target.value.DiscountType === "Amount off Order") {

    }
  };

  React.useEffect(() => {
    h(Price.length !== 0 && Product.Prices[0].Price.filter((data) => data.id === parseInt(Price[0].Item_id)))
  }, [Price])
    function discountype(type , amount ){
      switch(type) {
        case "PercentageDiscount":
           return `Get ${amount}%  OFF`
          break;

        default:
          // code block
      }
    }
   const [copyed, setcopyed] = React.useState('');

    useEffect(()=>{
       if(copyed !== ''){
        setTimeout(()=>setcopyed('') , 2000)
       }
    },[copyed])
   console.log(Product) 
  return (
    <div className="container-fluid">
      <ProductDetailsSeo Productname={Product.Product_Name} ProductCategory={Product.category_name} StoreName={Product.StoreName} City={Product.Store_City} State={Product.Store_State} location={useLocation().pathname} ></ProductDetailsSeo>

      <span onClick={() => Tolastpage()} className="BackPageBtn"> <AiOutlineLeft size={22} />{'StoreName' in Params ? <> <span className="backPgBtnImg"><img src={`${Despen.Store_Image}`} alt="" /></span> {Despen.Store_Name}</> : 'Back to products'}</span>
      <NewProductDetailsCards dynamicWeight={dynamicWeight} setdynamicWeight={setdynamicWeight} quentity={quentity} setquentity={setquentity} Product={Product} DiscountedValue={discount} Price={Price} SetPrice={SetPrice} />
      <div className="offerlist">
        <h2 className="section_main_title">Offers</h2>
        <div className="offerlistwrapper">
          {
            Product.copuon?.map((item)=>{
              return <div className="offercard">
                <div className="leftcoupon">
                  <span>Use Code</span>
                 
                    <span  onClick={() =>{navigator.clipboard.writeText(item.CouponCode) ; setcopyed(item.CouponCode)}}>{item.CouponCode} { copyed === item.CouponCode && <span className="copytooltip"> copied</span>}  </span>
               
                  <span>T&C</span>
                </div>
                <div className="rightcoupon">
                   <span>{discountype(item.DiscountType , item.PercentageAmount)}</span>
                  <span>Shopping Above {item.MinimumOrderValue}/-</span>
                  <Link to="/"><span>View All Product</span></Link>
                </div>
              </div>
            })
          }
        </div>
      </div>
      {/* <NewProductinfoText Product={{ heading: "Product Description", text: Product?.Product_Description }} /> */}
      {/* <div className="DiscountSection ">
        {


          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={discount}
            className={classes.dsicounSelects}
            renderValue={!Boolean(discount?.AutomaticDiscount) ? () => <Placeholder>Select Coupon</Placeholder> : () => discount.AutomaticDiscount}
            onChange={handlediscountChange}
          >

            {j.length !== 0 && j[0]?.Coupoun.length !== 0 ?
             j[0]?.Coupoun.map((da) =>(  
             
              
              (da.AutomaticDiscount !== null  || da.AutomaticDiscount !== "" )   && ( da.DiscountCode ==="" || da.DiscountCode === null)  &&
              <MenuItem value={da}> {da.AutomaticDiscount}</MenuItem> 
              
              ))
             
             : <MenuItem value=''>No Coupon</MenuItem>}
          </Select>

        }

      </div> */}
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