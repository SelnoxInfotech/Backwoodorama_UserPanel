import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
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
  muiSelect: {
    "&.MuiFormControl-root": {
      width: "168px",
      height: "38px",
      minWidth:"120px",
      // border:"1px solid red"
    },
    "& .MuiInputBase-root":{
      width: "168px",
      height: "38px",
      minWidth:"120px",
      // border:"1px solid yellow"
    },
    "& .MuiOutlinedInput-input":{
      width: "119px",
      // border:"2px solid green"
    },
    "& .MuiSelect-nativeInput":{
      height:"33px",
      width:"119px",
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
      boxShadow: "2px 2px"

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
  Signup_loading_btn_facebook: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      // background: "#3A559F",
      textTransform: "none",
      width: "100%",
      height: "38px",
      borderRadius: "40px",
      border: "2px solid #3A559F"


    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#3A559F"

    }
  },
  Reset_password_canel_loading_btn: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      // background: "#3A559F",
      textTransform: "none",
      width: "100%",
      height: "38px",
      borderRadius: "40px",
      border: "2px solid #C1C1C1",
      color:"#434343"


    },
    "& .MuiButtonBase-root:hover": {
      color: "#434343",
      backgroundColor: "#C1C1C1",
      border: "2px solid #C1C1C1",

    }
  },
  Signup_loading_btn_google: {
    "& .MuiButton-text": {
      fontSize: ".6rem",
    },
    "& .MuiLoadingButton-root": {
      // background: "#3A559F",
      // textTransform: "none",
      width: "100%",
      height: "38px",

      borderRadius: "40px",
      borderSpacing: "2px",
      border: "2px solid #3369C2"


    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#3369C2"

    }
  },
  loadingBtnTextAndBack: {
    "& .MuiButton-text": {
      fontSize: ".7rem",
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
  disPen_Icons: {
    fontSize: "large",
    color: "#31B665",

  },
  muiSearchIcon: {
    // "& .MuiSvgIcon-root":{
    //   color:"#31B665"
    // }
  }

});
export default useStyles