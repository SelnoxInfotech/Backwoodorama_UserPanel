

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({

  FilledTextFieldStyle: {
    "& .MuiFilledInput-root:hover": {
      background: "#F2F1F1"
    },
    "& .MuiInputBase-input.MuiFilledInput-input": {
      padding: "18px",
      borderRadius:"20px"
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#31B665"
    },
    "& input::placeholder": {
      fontSize: "12px"
    },
    " && .MuiFilledInput-underline:hover::before": {
      borderColor: "#31B665",
    },
    "& input": {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #F2F1F1 inset"

      }
    }
  },
  textFieldFocusBorderColor: {
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },
      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    }
  },

  textFieldcartPage: {
    "& .MuiOutlinedInput-root": {
      color:"#000",
      backgroundColor:"#fff",
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
        backgroundColor:"#fff",
      },
      '&:hover fieldset': {
        borderColor: '#31B665',
        // - Set the Input border when parent has :hover
      },
    }
  },
  searchBarPadding: {
    "&.MuiInputBase-sizeSmall": {
      paddingTop: " 6px",
      paddingBottom: "6px",
      paddingLeft: "30px",
    }
  },

  SearchBar_Text: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0px",
      paddingTop: '8.5px',
      paddingLeft: "20px"


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
    },
    "& .MuiInputLabel-root.Mui-focused ": {
      color: "#31B665"
    },
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },

      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    },
    "& .MuiInputBase-root": {
      width: "168px",
      height: "38px",
      minWidth: "150px",
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
  muiSelectTime:{
    "&.MuiFormControl-root": {
      width: "246px",
      height: "38px",
      minWidth: "120px",
      margin: "1px"
    },
    "& .MuiInputLabel-root.Mui-focused ": {
      color: "#31B665"
    },
    "& .MuiOutlinedInput-root": {
      " &.Mui-focused fieldset": {
        borderColor: "#31B665",
      },

      '&:hover fieldset': {
        borderColor: '#31B665', // - Set the Input border when parent has :hover
      },
    },
    "& .MuiInputBase-root": {
      width: "246px",
      height: "38px",
      minWidth: "150px",
      // border:"1px solid yellow"
    },
    "& .MuiOutlinedInput-input": {
      // width: "119px",
      // border:"2px solid green"
    },
    "& .MuiSelect-nativeInput": {
      height: "33px",
      // width: "119px",
    }
  },
  muiBtn: {
    "&.MuiButtonBase-root": {
      backgroundColor: "white",
      color: "#707070",
      // outline: "1px solid #00b96a",
      border: "1px solid #31B665",
      borderRadius: " 71px  71px",

      minWidth: "100%",
      textTransform: "none",
      width: "120px",
       height: "45px"
    },
    "&.MuiButtonBase-root:hover": {

      color: "white",
      background: "#00b96a",
      // boxShadow: "2px 2px"

    }
  },
  muiBtn_Signup: {
    "&.MuiButtonBase-root": {
      // backgroundColor: "white",
      color: "white",
      // outline: "1px solid #00b96a",
      backgroundColor: "#00b96a",
      borderRadius: " 71px  71px",
      // boxShadow:"box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
      minWidth: "100%",
      textTransform: "none",
      width: "120px"
      , height: "45px"
    },
    "&.MuiButtonBase-root:hover": {

      color: "white",
      background: "#00b96a",
      // boxShadow: "2px 2px"

    }
  },
  homePageButton: {
    "&.MuiButtonBase-root": {
      background: "#31B665",
      color: "#FFFFFF",
      border: "1px solid #31B665",
      borderRadius: "25px 25px",
      minWidth: "100%",
      textTransform: "none",
    },
    "&.MuiButtonBase-root:hover": {

      color: "white",
      background: "#31B665",
      
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
    color: "#31B655",
  },
  Signup_loading_btn_Googles: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      textTransform: "none",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      height: "38px",
      borderRadius: "40px",
      color: "#ffff",
      backgroundColor: "#3A559F",
      gap: "25px",
      paddingLeft: "40px"
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
      display: "flex",
      justifyContent: "flex-start",
      gap: "25px",
      paddingLeft: " 41px",
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
      fontSize: "14px",
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
      border: "2px solid #31B665"
    },
  },
  Cencell: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
 

    "& .MuiLoadingButton-root": {
      fontSize: "14px",
      width: "30%",
      height: "30px",
      // borderRadius: "40px",
      backgroundColor: "#ffff",
      color: "#31B665",
      textTransform: "none",
      border: "2px solid #31B665"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#00b96a",
      border: "2px solid #31B665"
    },
  },
  loginBtnTextAndBackground: {
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
  loginBtnTextAndBackgroundAfter: {

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
    fontSize: "17px",
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
    "& .MuiTab-root": {
      textTransform: "capitalize",
      color: "#707070",
      fontWeight: "400",
      fontSize: "16px"
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#31B665",
    },
    "@media(Max-width:480px)": {
      "& .MuiTab-root": {
        fontSize: "12px"
      }
    }
  },
  delivery_menuBar: {
    "& .MuiTabPanel-root": {
      paddingLeft: "0px",
      paddingRight: "0px",
      textTransform: 'none'

    }
  },
  open_dispensory_tab_background: {
    "& .MuiTabs-flexContainer": {
      backgroundColor: "#F9F9F9",
      gap: '217px',
      minWidth: "max-content",
    },
    "@media(max-width:1280px)": {
      "& .MuiTabs-flexContainer": {
        gap: '10px',
      },
    },

    "& .MuiTabs-scroller": {
    }
  },
  dispensory_tab_background: {
    "& .MuiTabs-flexContainer": {
      backgroundColor: "#F9F9F9",
      gap: '190px',
      minWidth: "max-content",
    },
    "@media(max-width:1280px)": {
      "& .MuiTabs-flexContainer": {
        gap: '10px',
      },
    },

    "& .MuiTabs-scroller": {
    }
  },
  deliverItemCardPadding: {
    "& .MuiTabPanel-root": {
      padding: "0px",
    }
  },

  flotchceckoutbtn:{
   
    '&.MuiLoadingButton-root':{
      backgroundColor:'#31B665',
      color:'#fff',
     
      height:'50px',
      fontSize:'18px',
      fontWeight:'700'
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
  homePageStarIcons: {
    "&.MuiRating-root": {
      color: "#31B665",
      fontSize:"18px"
    },
  },
  productSearchIcons: {
    fontSize: "25px",
    color: "gray"
  },
  productSearchIcons2: {
    fontSize: "25px",
    color: "gray",
    position:'absolute',
    top:'0',
    right:'0'
  },
  muiSignupInputFileld: {
    "&.MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: "20px",
      backgroundColor: "white"
    }
  },
  checkAgeEligibility: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        maxWidth: "430px",
        width: "100%",
        borderRadius: "15px",
        border: "1px solid #31B665"
      }
    }
  },
  checAgeEligibiltyHeight: {
    "& .MuiOutlinedInput-root": {
      height: "40px",
    }
  },
  checAgeEliigiblityPopup: {
    "&.MuiButtonBase-root": {
      background: "#31B665",
      color: "#FFFFFF",
      border: "1px solid #00C4FF",
      borderRadius: "8px",
      minWidth: "100%",
      textTransform: "none",
    },
    "&.MuiButtonBase-root:hover": {
      color: "white",
      background: "#31B665",
    }
  },
  checkAgeEligibiltyAge_SecBtn: {
    "&.MuiButtonBase-root": {
      color: "#31B665",
      border: "1px solid #31B665",
      borderRadius: "8px",
      minWidth: "100%",
      textTransform: "none",
    },
    "&.MuiButtonBase-root:hover": {
      color: "#31B665",
      // background: "#31B665",
    }
  },
  checkAge_eligibility_Select: {
    "&.MuiFormControl-root": {
      width: "180px",
      marginLeft: "0px",
      textAlign: 'center'
    },
    "& .MuiOutlinedInput-notchedOutline ": {
      border: "none",
      outline: "1px solid #31B665"
    }
  },

  sliderLink_badge: {
    "& .MuiBadge-badge": {
      background: "#31B665",
      color: "#FFFFFF"
    }
  },
  searchBar_padding: {
    "&.MuiTextField-root": {
      paddingLeft: "10px"
    }
  },
  homePageDealSignup_TextFields: {
    "& fieldset": {
      border: 'none',
    }
  },
  check_age_selectTag: {

  },
  learn_tab_background: {
    "& .MuiTabs-flexContainer": {
      gap: '20px',
      minWidth: "max-content",
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
  learn_tab: {
    "& .MuiTabs-indicator": {
      position: "absolute",
      height: "2px",
      bottom: "10px",
      left: "0px",
      width: "90px",
      background: "#31B665",
      display: "none"
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#31B665",
    },
    "& .MuiTab-root": {
      textTransform: "none",
      color: "#707070",
      fontSize: "16px"
    }
  },
  learnTabPadding: {
    "& .MuiTabPanel-root": {
      padding: "0px",
    }
  },
  profileLoadingBtn: {
    "& .MuiButton-text": {
      fontSize: "1.5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "52px",
      textTransform: "none",
      border: "2px solid #D9D9D9",
      borderRadius: "0px",
      color: "#000000",
      backgroundColor: "#D9D9D9",
    },
    "& .MuiButtonBase-root:hover": {
      color: "#000000",
      backgroundColor: "#D9D9D9",
      border: "1px solid #D9D9D9",
      borderRadius: "0px",
    },
  },
  EditProfileTextFields_Outline: {
    "& fieldset": {
      border: 'none'
    }
  },
  notification_dialogBox_width_height: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "400px",  // Set your width here
        borderRadius: "20px",
        background: "#FFFFFF",
      },
    },
    "@media(max-width:576px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%",
        },
      },
    }
  },
  editEmail_loadingBtn: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "50px",
      borderRadius: "5px",
      backgroundColor: "#FFFFFF",
      color: "#707070",
      textTransform: "none",
      border: "1px solid #31B665",
      fontWeight: "700",
      fontSize: "14px"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#FFFFFF",
      backgroundColor: "#31B665",
      border: "1px solid #31B665"
    },
  },
  editEmail_loadingBtn_cancel: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "50px",
      borderRadius: "5px",
      color: "#434343",
      textTransform: "none",
      border: "1px solid #C1C1C1",
      fontWeight: "700",
      fontSize: "14px"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#434343",
      backgroundColor: "#C1C1C1",
      border: "1px solid #C1C1C1"
    },
  },
  notification_user_dialogBox_width_height: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "490px",  // Set your width here
        borderRadius: "20px",
        background: "#FFFFFF",
      },
    },
    "@media(max-width:500px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%",
        },
      },
    }
  },
  editPwd_Popup_dialog: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "auto",
        borderRadius: "20px",
        background: "#FFFFFF",
        padding: "30px 0px"
      }
    },
    "@media(max-width:500px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%"
        }

      }
    }
  },
  
  EditUserNamePopup: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "450px",
        borderRadius: "20px",
        background: "#FFFFFF",
      }
    },
    "@media(max-width:500px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%"
        }

      }
    }

  },
  AddMobilePopup: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "490px",
        borderRadius: "20px",
        background: "#FFFFFF",
      }
    },
    "@media(max-width:500px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%"
        }

      }
    }
  },
  addDeliverAddress: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "450px",
        borderRadius: "20px",
        background: "#FFFFFF",
      }
    },
    "@media(max-width:500px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%"
        }

      }
    }
  }
  ,
  addPhotoPopup: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "auto",
        borderRadius: "20px",
        padding: "20px",
        background: "#FFFFFF",
      }
    },
    "@media(max-width:500px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%"
        }

      }
    }
  },
  medicalCardDetail_dialog: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "auto",
        padding: "20px",
        borderRadius: "20px",
        background: "#FFFFFF",
      }
    },
    "@media(max-width:500px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%"
        }

      }
    }
  },
  addDateOfBirthPopup: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        height: "auto",
        padding: "20px",
        borderRadius: "20px",
        background: "#FFFFFF",
      }
    },
    "@media(max-width:500px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%"
        }

      }
    }
  },
  fourZeroFourBtn: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "50%",
      height: "50px",
      borderRadius: "5px",
      backgroundColor: "#FFFFFF",
      color: "#434343",
      textTransform: "none",
      border: "1px solid #31B665",
      fontWeight: "700",
      fontSize: "14px"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#434343",
      backgroundColor: "#FFFFFF",
      border: "1px solid #31B665"
    },
  },
  fiveZero_Three: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "50%",
      height: "50px",
      borderRadius: "5px",
      backgroundColor: "#FFFFFF",
      color: "#434343",
      textTransform: "none",
      border: "1px solid #31B665",
      fontWeight: "700",
      fontSize: "14px"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#434343",
      backgroundColor: "#FFFFFF",
      border: "1px solid #31B665"
    },
  },
  fourZero_Three: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      width: "50%",
      height: "50px",
      borderRadius: "5px",
      backgroundColor: "#FFFFFF",
      color: "#434343",
      textTransform: "none",
      border: "1px solid #31B665",
      fontWeight: "700",
      fontSize: "14px"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#434343",
      backgroundColor: "#FFFFFF",
      border: "1px solid #31B665"
    },
  },
  navbarprofileLoadingBtn: {
    "& .MuiButton-text": {
      fontSize: "12px",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "52px",
      textTransform: "none",
      border: "2px solid #D9D9D9",
      borderRadius: "0px",
      color: "#000000",
      backgroundColor: "#D9D9D9",
    },
    "& .MuiButtonBase-root:hover": {
      color: "#000000",
      backgroundColor: "#D9D9D9",
      border: "1px solid #D9D9D9",
      borderRadius: "0px",
    },
  },
  sliderProfile_loadingBtn: {
    "& .MuiButton-text": {
      fontSize: "12px",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "35px",
      textTransform: "none",
      border: "2px solid #D9D9D9",
      borderRadius: "0px",
      color: "#000000",
      backgroundColor: "#D9D9D9",
    },
    "& .MuiButtonBase-root:hover": {
      color: "#000000",
      backgroundColor: "#D9D9D9",
      border: "1px solid #D9D9D9",
      borderRadius: "0px",
    },
  },
  EditProfileBtn_Color: {
    "&.MuiButtonBase-root": {
      color: "#707070"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#434343",
      backgroundColor: "#FFFFFF",
      border: "1px solid #31B665"
    },
  },

  CookiesAccept: {
    "& .MuiButton-text": {
      fontSize: "12px",

    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "52px",
      textTransform: "none",
      borderRadius: "10px",
      color: "white",
      backgroundColor: "#00b96a",
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "#D9D9D9",
      color: "Black",
    },
  },
  CookiesSetting: {
    "& .MuiButton-text": {
      fontSize: "12px",
    },
    "& .MuiLoadingButton-root": {
      width: "100%",
      height: "52px",
      textTransform: "none",
      borderRadius: "10px",
      color: "#000000",
      backgroundColor: "#D9D9D9",
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "#D9D9D9",
    },
  },

  myOrderRatingStarIcons: {
    "&.MuiRating-root": {
      color: "#31B665",
      gap: "5px"
    },
  },
  OrderTrackingCircleColor: {
    '& .MuiStepLabel-root .Mui-completed': {
      color: "#31B665"
    },
    "& $disabled": {
      color: "pink"
    },
    "& .MuiStepLabel-root .Mui-active": {
      color: "#707070"
    }
  },

  OrderTrackingLoadingBtn: {
    "& .MuiButton-text": {
      fontSize: "1rem",
    },
    "& .MuiLoadingButton-root": {

      width: "45%",
      height: "38px",
      borderRadius: "4px",
      textTransform: "none",
      border: "1px solid #31B665",
      color: "#8A8A8A",
    },
    "& .MuiButtonBase-root:hover": {
      color: "#8A8A8A",
      border: "1px solid #31B665"
    },
  },
  OrderTrackingBtn: {
    marginLeft: "10px"
  },
  strainTypSearchBar: {
    
    "& .css-y40w8": {
      position: "absolute",
      right: "0px",
      backgroundColor: "#31B665",
      color: "#FFFFFF",
      width: "55px",
      borderRadius: "4px",
      cursor: "pointer"
    },
    "& .css-1ywo31j ": {
      position: "absolute",
      left: "0px",
      backgroundColor: "#31B665",
      color: "#FFFFFF",
      width: "35px",
      cursor: "pointer"
    },
    [`@media screen and (max-width: 768px)`] : {
       width:'100%',
      },
  },
  navBarButton_icons: {
    "&.MuiIconButton-root": {
      padding: "3px"
    }
  },
  MyOrderSearchBar: {
    "& .css-y40w8": {
      color: "#B0B0B0"
    }
  },
  recentPostCancelBtn: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      textTransform: "none",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      height: "40px",
      borderRadius: "5px",
      color: "#ffff",
      backgroundColor: "#C1C1C1",
      border: "1px solid #C1C1C1"

    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "#C1C1C1",
      border: "1px solid #C1C1C1"
    }
  },
  recentPostCancelBtn2: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      textTransform: "none",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      height: "40px",
      borderRadius: "5px",
      color: "#ffff",
      backgroundColor: "#31B665",
      border: "1px solid #31B665"
    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "#31B665",
      border: "1px solid #31B665"
    },
    deliveryServiceBox: {
      "& .css-y061pl": {
        marginTop: "0px",
      }
    },
    HomePageBaneerSkeletonGrid: {
      "& .MuiSkeleton-root": {
        width: "100%",
        height: "400px"
      }

    },
    dispensoriesAddressSkeletonHeading: {
      "& .MuiSkeleton-text ": {
        height: "10px",
        width: "100px",
        backgroundColor: "red"
      }


    },
    recatngularDispenAdd: {
      width: "40%",
      margin: "auto",
      marginTop: "8px",
      height: "5%"
    },
    HomePageDealSignUpSkeleton: {
      display: "flex",
      justifyContent: "flex-end",
      width: "90%"
    }
  },
  deliveryInformationTextFildColor: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "#31B665"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#31B665"

    }
  },
  muiDatePicker: {
    "& .MuiOutlinedInput-root .Mui-focused": {
      borderColor: "#31B665"
    }
  },
  whishlistBtn: {
    "& .MuiButton-text": {
      fontSize: "14px",
    },
    "& .MuiLoadingButton-root": {
      textTransform: "none",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      height: "35px",
      color: "#31B665",
      backgroundColor: "#FFFFFF",
      border: "1px solid #31B665",
      borderRadius: "20px"

    },
    "& .MuiButtonBase-root:hover": {
      backgroundColor: "#31B665",
      color:'#fff',
      border: "1px solid #31B665"
    }
  },

  emailVer_title: {

    "& .MuiTypography-root": {
      color: "#000000",
      fontSize: "25px",
      fontWeight: 700,
      marginTop: "20px",

      display: 'flex',
      justifyContent: "center",

    }

  },
  muiDialogContent: {
    "& .MuiDialogContent-root": {
      padding: "10px 20px",


    }
  },
  muiNormalBtn: {
    "& .MuiButtonBase-root": {
      textTransform: "none",

    },
    "& .MuiButton-text": {
      fontSize: ".7rem",
      color: "blue",

    }
  },
  emailVerLoadingBtn: {
    "& .MuiLoadingButton-root": {
      textTransform: "none",

    },
    "& .MuiButton-text": {
      fontSize: ".7rem",
      color: "blue",

    }
  },
  WriteReviewDialog: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "50%",
        paddingBottom:"40px",
        height: "auto",  // Set your width here
        borderRadius: "20px",
        background: "#FFFFFF",
      },
    },
    "@media(max-width:991px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "70%",
        },
      },
    },
    "@media(max-width:600px)": {
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          minWidth: "90%",
        },
      },
    }
  },
  odsbtn:{
    "&.MuiButtonBase-root":{
      width: "100%",
      height: "30px",
       fontSize: "14px" ,
       color:"red" ,
        border: '1px solid red',
        borderRadius:'30px',
    },
    "&.MuiButtonBase-root:hover":{
    
       color:"red" ,
       backgroundColor:'#fff',
        border: '1px solid red',
    }
  },
  WriteReviewBtn_Color: {
    "&.MuiButtonBase-root": {
      color: "#707070",
      border:"1px solid #f0f0f0",
      borderRadius:"14px",
      textTransform:"none",
      height:"32  px",
      fontSize:"14px",
      borderColor:'#31B665',
    },
    "&.MuiButtonBase-root:hover": {

      color: "#fff",
      border: "1px solid #f0f0f0",
      background: "#31B655",
     

    },
  },
  WriteReviewStarIcons: {
    "&.MuiRating-root": {
      color: "#31B665",
      fontSize: '35px',
    },
  },
  reportReviewPopupCancelBtn: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      fontSize: "14px",
      width: "100%",
      height: "38px",
      borderRadius: "10px",
      backgroundColor: "#FFFFFF",
      color: "#000000",
      textTransform: "none",
      border: "2px solid #C1C1C1"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#000000",
      backgroundColor: "#C1C1C1",
      border: "2px solid #C1C1C1"
    },
  },
  reportSubmitBtn: {
    "& .MuiButton-text": {
      fontSize: ".5rem",
    },
    "& .MuiLoadingButton-root": {
      fontSize: "14px",
      width: "100%",
      height: "38px",
      borderRadius: "10px",
      backgroundColor: "#ffff",
      color: "#31B665",
      textTransform: "none",
      border: "2px solid #31B665"
    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#00b96a",
      border: "2px solid #31B665"
    },
  },
  reportCheckBox:{
    "& .MuiSvgIcon-root": {
      fill: "#31B665",
      display:"flex",
    },
   },
   reportReviewLabelBaseline:{
    "&.MuiFormControlLabel-root":{
      alignItems:"baseline"
    }
   },
   blogPaginateIconButton:{
    "&.MuiIconButton-root":{
      padding:"4px"
    }
   },
   blogPaginateIconButtonNumber:{
    "&.MuiIconButton-root":{
      padding:"2px",
      width:"20px",
      height:"20px",
      borderRadius:"50%",
      backgroundColor:"#D9D9D9",
      marginInline:"4px",

    }
   },
   deliveryOptionRadioBtn:{
    "& .MuiSvgIcon-root": {
      color: "#31B665",
  },
  ".MuiTypography-body1": {
      fontSize: "1rem"
  }
   },
   noReviewBtn:{
    "&.MuiButtonBase-root": {
      color: "#fff",
      border:"1px solid #f0f0f0",
      borderRadius:"8px",
      textTransform:"none",
     backgroundColor:'#4BBF78',
      fontSize:"16px",
      width:'200px',
    },
    "&.MuiButtonBase-root:hover": {

      color: "#4BBF78",
      border: "1px solid #f0f0f0",
      background: "#FFFFFF",
     

    },
   },
   textFieldcartsummeryPage:{
    color:"#000",
    backgroundColor:'#fff',
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.625rem',
      fontSize: '1rem',
      '& fieldset': {
        borderColor: `#BEBEBE`
      },
      '&.Mui-focused fieldset': {
        borderColor: `#31B665 `
      }
    }  
    // "& .MuiOutlinedInput-root": {
    //   color:"#000",
    //   backgroundColor:"#fff",
    //   " &.Mui-focused fieldset": {
    //     color:"#000",
    //     borderColor: "#31B665",
    //     backgroundColor:"#fff",
    //   },
    //   '&:hover fieldset': {
    //      color:"#000",
    //     borderColor: '#31B665',
    //   },
    // }
  },

  paper: {
    // left: '100px',
    width: '100%',
    border: "1px solid #d6cfcf",
    position: 'absolute',
    // height:' 100%',
    margin: '0px',
    // transform: translate('494px',' 62px')
  },  
});



export default useStyles