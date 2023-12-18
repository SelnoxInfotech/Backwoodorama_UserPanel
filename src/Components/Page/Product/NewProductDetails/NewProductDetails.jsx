import React from "react"
import NewProductDetailsCards from "./NewProductDetailsComponent/NewProductDetailsCards"
import NewProductinfoText from "./NewProductDetailsComponent/NewProductinfoText"
import ProductSearchResult from "../ProductSearchResult/ProductSearchResult"
import Axios from "axios";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from "../../../../Style"
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Review from "../../Review/Review"
import { AiOutlineLeft } from "react-icons/ai";
import { ProductDetailsSeo } from "../../../Component/ScoPage/ProductSeo"
import { product_OverAllGet_Review, Product_Add_Review, Product_Get_UserComment, Product_Get_Review, Delete_Review, ProductHelpFull } from "../ProductApi"
import Createcontext from "../../../../Hooks/Context"
import _ from 'lodash'
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
    CouponMassage: ""
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
      // setdiscount(0)
      SetProduct(() => {
        return response.data[0]
      })

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
    }).catch(
      function (error) {
        alert("Something Goes Wrong")
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
  const discountOptions = (data) => {
    const uniqueNames = data.filter((val, id, data) => {
      return data.indexOf(val) === id;
    });
    return uniqueNames
  }
  const Placeholder = ({ children }) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
  };

  const handlediscountChange = (event) => {
  
    if (event.target.value.DiscountType === "Amount off Order") {
      // setdiscount({ ...discount, "DiscountType": "Amount off Order" });
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
          setdiscount({ ...discount,
             "Amount": event.target.value.ValueAmount, 
             'Reflect': false,
              "DiscountType": "Amount off Order" ,
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
          setdiscount({ ...discount, "Percentage": event.target.value.PercentageAmount, 'Reflect': true, "DiscountType": "Amount off Products" });
        }
        else {
          setdiscount({ ...discount, "Amount": event.target.value.ValueAmount, 'Reflect': true, "DiscountType": "Amount off Products" });
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
              'CouponMassage': "Minimum Quantity of Item ",
              "Percentage": event.target.value.PercentageAmount,

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

              });
            }
            else {
              setdiscount({
                ...discount,
                "MinimumPurchaseAmount": event.target.value.MinimumPurchaseAmount,
                'Reflect': false,
                "DiscountType": "Amount off Products",
                'CouponMassage': "Minimum Purchase of Amount ",
                "Amount": event.target.value.ValueAmount

              });

            }
          }
        }
      }
    }
    else if (event.target.value.DiscountType === "Amount off Order") {

    }
    else if (event.target.value.DiscountType === "Amount off Order") {

    }
  };


  return (
    <div className="container-fluid">
      <ProductDetailsSeo Productname={Product.Product_Name} ProductCategory={Product.category_name} StoreName={Product.StoreName} City={Product.Store_City} State={Product.Store_State} location={useLocation().pathname} ></ProductDetailsSeo>

      <span onClick={() => Tolastpage()} className="BackPageBtn"> <AiOutlineLeft size={22} />{'StoreName' in Params ? <> <span className="backPgBtnImg"><img src={`${Despen.Store_Image}`} alt="" /></span> {Despen.Store_Name}</> : 'Back to products'}</span>
      <NewProductDetailsCards Product={Product} DiscountedValue={discount} />

      <NewProductinfoText Product={{ heading: "Product Description", text: Product?.Product_Description }} />
      {Product?.CategoryCoupoun?.length !== 0 || Product?.ProductCoupoun?.length !== 0 &&
        <div className="DiscountSection ">
          <FormControl fullWidth>
            <Select
              id="discount select"
              value={discount}
              displayEmpty
              renderValue={!Boolean(discount?.DiscountType) ? () => <Placeholder>Select Coupon</Placeholder> : () => discount.DiscountType}
              onChange={handlediscountChange}
              className={classes.dsicounSelects}>
              {discountOptions([...Product?.CategoryCoupoun, ...Product?.ProductCoupoun]).map((item) => {
                return <MenuItem value={item}>{item?.DiscountType}</MenuItem>
              })}
            </Select>
          </FormControl>
          {discount.CouponMassage !== "" && <div className="col-12 center " style={{ height: "100px", color: "#31B655" }}>
            <p>{discount.CouponMassage}</p>
          </div>
          }
        </div>
      }
      <ProductSearchResult RelatedProductResult={StoreProduct} currentProductID={Product.id} CategoryName={heading} />
      <Review
        delBtn={Despen}
        reviewloading={reviewloading}
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