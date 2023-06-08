import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  searchBarPadding:{
    "&.MuiInputBase-sizeSmall":{
      paddingTop:" 6px",
      paddingBottom:"6px",
      paddingLeft:"30px",
    }
  },

  SearchBar_Text: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0px",
      paddingTop: '8.5px',
      

    }
    ,
    "& .MuiInputBase-input": {
      height: "15px"
    }
    ,
    "& .MuiInputBase-root": {
      fontSize: "15px"
    }
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  },
  mui_signup_btn: {
    "&.MuiButtonBase-root": {
      fontSize: "12px",
      textTransform: "none",
      color: "gray"
    }
  },
  stepperBtn: {
    "&.StepButton-d0-0-4-6.completed": {
      background: "#31B665"
    },

  },
  stepperActiveBtn: {
    "& .StepButton-d2-0-4-12 &.active": {
      background: "#31B665"

    },
    "& .active": {
      outline: "none"
    }
  },
  muiSelect: {
    "&.MuiFormControl-root": {
      width: "168px",
      height: "38px",
      minWidth: "120px",
      margin: "1px"
      // border:"1px solid red"
    },
    "& .MuiInputBase-root": {
      width: "168px",
      height: "38px",
      minWidth: "150px",
      // border:"1px solid yellow"
    },
    "& .MuiOutlinedInput-input": {
      width: "119px",
      // border:"2px solid green"
    },
    "& .MuiSelect-nativeInput": {
      height: "33px",
      width: "119px",
    }
  },
  muiBtn: {
    "&.MuiButtonBase-root": {
      backgroundColor: "white",
      color: "#00b96a",
      // outline: "1px solid #00b96a",
      border: "1px solid #31B665",
      borderRadius: "25px 25px",
      minWidth: "100%",
      textTransform: "none",
    },
    "&.MuiButtonBase-root:hover": {

      color: "white",
      background: "#00b96a",
      // boxShadow: "2px 2px"

    }
  },
  homePageButton:{
    "&.MuiButtonBase-root": {
      background:"#31B665",
      color: "#FFFFFF",
      border: "1px solid #31B665",
      borderRadius: "25px 25px",
      minWidth: "100%",
      textTransform: "none",
    },
    "&.MuiButtonBase-root:hover": {

      color: "white",
      background:"#31B665",
      // boxShadow: "2px 2px"

    }
  },

  muiIcon: {
    fontSize: "x-large",
    color: "#4267B2",
  },
  insta: {
    fontSize: "x-large",
    color: "#fb3958",


  },
  muiIcons: {
    fontSize: "large",
    color: "gray",
  },
  Signup_loading_btn_Googles: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      textTransform: "none",
      width: "100%",
      display:"flex",
      justifyContent:"flex-start",
      height: "38px",
      borderRadius: "40px",
      color: "#ffff",
      backgroundColor: "#3A559F",
      gap:"50px",
      paddingLeft:"40px"
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "#3A559F"

    }
  },
  Reset_password_canel_loading_btn: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      textTransform: "none",
      width: "100%",
      height: "38px",
      borderRadius: "40px",
      border: "2px solid #C1C1C1",
      color: "#434343"


    },
    "& .MuiButtonBase-root:hover": {
      color: "#434343",
      backgroundColor: "#C1C1C1",
      border: "2px solid #C1C1C1",

    }
  },
  Signup_loading_btn_facebook: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      // background: "#3A559F",
      textTransform: "none",
      width: "100%",
      display:"flex",
      justifyContent:"flex-start",
      gap:"50px",
      paddingLeft:" 41px",
      height: "38px",
      backgroundColor: "#3369C2",
      color: "#ffff",
      borderRadius: "40px",
      borderSpacing: "2px",
      // border: "2px solid #3369C2"


    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#3369C2"

    }
  },
  loadingBtnTextAndBack: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "38px",
      borderRadius: "40px",
      backgroundColor: "#ffff",
      color: "#31B665",
      textTransform: "none",
      border: "2px solid #31B665"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#00b96a",
      border: "1px solid #31B665"
    },
  },
  loginBtnTextAndBackground:{
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "38px",
      borderRadius: "40px",
      textTransform: "none",
      border: "2px solid #31B665",
      color: "#ffff",
      backgroundColor: "#00b96a",
    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#00b96a",
      border: "1px solid #31B665"
    },
  },
  loginBtnTextAndBackgroundAfter:{
  
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "38px",
      borderRadius: "40px",
      textTransform: "none",
      border: "2px solid #31B665",
      color: "#ffff",
      backgroundColor: "white",
    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#00b96a",
      border: "1px solid #31B665"
    },
  },
  disPen_Icons: {
    fontSize: "large",
    color: "#31B665",

  },

  
  open_dispensory_tab: {
    "& .MuiTabs-indicator": {
      position: "absolute",
      height: "2px",
      bottom: "10px",
      left: "0px",
      width: "90px",
      background: "#31B665",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#31B665"
    }
  },
  delivery_menuBar: {
    "& .MuiTabPanel-root": {
      paddingLeft: "0px",
      paddingRight:"0px"
    }
  },
  open_dispensory_tab_background: {
    "& .MuiTabs-flexContainer": {
      backgroundColor: "#F9F9F9",
      gap: '217px',
      minWidth:"max-content",
    },
    "@media(max-width:1280px)": {
      "& .MuiTabs-flexContainer": {
        gap: '10px',
        // overflowX: "scroll",
        // overflowY: "hidden"

      },
    },

    "& .MuiTabs-scroller": {
      // overflow: "scroll"
    }
  },
  dispensory_tab_background:{
    "& .MuiTabs-flexContainer": {
      backgroundColor: "#F9F9F9",
      gap: '190px',
      minWidth:"max-content",
    },
    "@media(max-width:1280px)": {
      "& .MuiTabs-flexContainer": {
        gap: '10px',
        // overflowX: "scroll",
        // overflowY: "hidden"

      },
    },

    "& .MuiTabs-scroller": {
      // overflow: "scroll"
    } 
  },
  deliverItemCardPadding: {
    "& .MuiTabPanel-root": {
      padding:"0px",
    }
  },


  homePage_iconsColor: {
    color: "black",
  },
  disp_star_color: {
    color: "#31B665"

  },
  footer_icons_color: {
    color: "#31B665",
    fontSize: "large"
  },
  AddToCartPoPUP_width_height: {
    ".css-lmdl13-JoySheet-root-JoyModalDialog-root": {
      width: "50%",
      height: "50%"
    }
  },
  EmptyCartIcon: {
    fontSize: "60px",
    color: "gray"
  },
homePageStarIcons:{
  "&.MuiRating-root":{
    color: "#31B665",
  },
},
  productSearchIcons: {
    fontSize: "25px",
    color: "gray"

  },
  muiSignupInputFileld:{
    "&.MuiInputBase-root-MuiOutlinedInput-root":{
      borderRadius:"20px",
      backgroundColor:"white"
    }
  },
  checkAgeEligibility:{
    "& .MuiDialog-container":{
      "& .MuiPaper-root":{
        maxWidth:"430px",
        width: "100%",

      }
    }
  },
  checAgeEliigiblityPopup:{
    "&.MuiButtonBase-root": {
      background:"#31B665",
      color: "#FFFFFF",
      border: "1px solid #00C4FF",
      borderRadius: "8px",
      minWidth: "100%",
      textTransform: "none",
    },
    "&.MuiButtonBase-root:hover": {

      color: "white",
      background:"#31B665",
    }
  },
  checkAgeEligibiltyAge_SecBtn:{
    "&.MuiButtonBase-root": {
      // background:"#00C4FF",
      color: "#31B665",
      border: "1px solid #31B665",
      borderRadius: "8px",
      minWidth: "100%",
      textTransform: "none",
    },
    "&.MuiButtonBase-root:hover": {
      color: "white",
      background:"#31B665",
    }
  },
  checkAge_eligibility_Select:{
    "&.MuiFormControl-root":{
      width:"180px",
      marginLeft:"0px"
    }
  },
  checAgeEligibiltyHeight:{
    "& .MuiOutlinedInput-root":{
      height:"40px",
    }
  },
  sliderLink_badge:{
    "& .MuiBadge-badge":{
      background: "#31B665",
      color: "#FFFFFF"
    }
  },
searchBar_padding:{
  "& .MuiAutocomplete-root ":{
    paddingLeft:"20px"
  }
},
homePageDealSignup_TextFields:{
  "& fieldset":{
    border: 'none',
  }
}
  // NewproductHeart:{
  //  backgroundColor:"#949494" 
  // }

});

export default useStyles